import fs from "fs/promises";
import path from "path";
import {
  Component,
  getComponentImplementation,
  parseComposition,
  readComponentsConfigurations,
  readMoleculeComponent,
  readUserStory,
  LOCAL_COMPONENTS_DIR,
  getImplementationsExample,
  saveFile,
  checkIfFileExists,
} from "./utils";
import { componentGenerator } from "./generateComponentsFromConfigurations";

const parseMoleculeImplementation = ({
  componentName,
  uiComponentCode,
}: any) => {
  return `
----${componentName} START----
Components Code: 
${uiComponentCode}
----${componentName} END----
`;
};

export const saveComposedComponent =
  (dirPath: string) =>
  async ({
    componentName,
    dependencies,
    uiCompImplementations,
    implementations,
    componentConfiguration,
    userStory,
  }: any) => {
    const componentExample = `import React from 'react';
import { ${componentConfiguration.uiComponents.join(
      ", "
    )} } from '@react-agent/shadcn-ui'
${dependencies
  .map((CompName: string) => `import ${CompName} from './${CompName}';`)
  .join("\n")}

export interface ${componentName}Props {};

const ${componentName} = (props: ${componentName}Props) => {
  return (
    {/* Your component implementation */}
  );
};

export default ${componentName};
`;
    const description = `
Component Name:
${componentName}
---
UI shadn component Dependencies (@react-agent/shadcn-ui):
${componentConfiguration.uiComponents}
---
UI shadn component Implementations examples:
${getImplementationsExample(uiCompImplementations)}
---
Dependencies:
${dependencies}
---
Implementations:
${implementations
  .map((code, ix) =>
    parseMoleculeImplementation({
      componentName: dependencies[ix],
      uiComponentCode: code,
    })
  )
  .join("\n")}
---
User Story: 
${userStory}
---
Instructions:
Import component dependencies from '@react-agent/shadcn-ui' library. e.g import { ComponentNameOne, ComponentNameTwo } from '@react-agent/shadcn-ui';
Generate the component ${componentName}, It is part of the user story, use the user story and the skeleton as a reference.
---
Compoponent Composition:
${JSON.stringify(componentConfiguration)}
---
Here is a starter, continue from here:
${componentExample}
`;

    const [componentCode] = await componentGenerator.generateComponent({
      description,
    });

    if (!componentCode) {
      console.error("Unable to generate component code");
      return;
    }

    await saveFile(dirPath, `index.tsx`, componentCode);
  };

export const generateComposedComponent =
  (type: "organism" | "page" = "organism") =>
  async (containerPath: string) => {
    const dir = LOCAL_COMPONENTS_DIR;
    const dirPath = path.join(dir, containerPath);
    const configurations = await readComponentsConfigurations(dirPath);
    const userStory = await readUserStory(dirPath);
    const components = configurations.filter((config) => config.type === type);
    const generateComponent = async (component: Component) => {
      const uiCompImplementations = await Promise.all(
        component.uiComponents.map(getComponentImplementation)
      );

      const treeFlat = parseComposition(component);
      const dependencies =
        type === "organism" ? treeFlat.molecules : treeFlat.organisms;
      const dependenciesNames = dependencies.map((c) => c.name);

      const componentDir = path.join(
        dirPath,
        type === "organism" ? component.name : ""
      );

      const moleculeImplementations = await Promise.all(
        dependenciesNames.map(readMoleculeComponent(componentDir))
      );

      await fs.mkdir(componentDir, { recursive: true });

      const existingComponent = await checkIfFileExists(
        path.join(componentDir, "index.tsx")
      );
      if (existingComponent) {
        console.log(
          `generateComposedComponent: skipping Component ${component.name} already exists`
        );
        return;
      } else {
        console.log(
          `generateComposedComponent: generating Component ${component.name}`
        );
      }

      await saveComposedComponent(componentDir)({
        componentName: component.name,
        dependencies: dependenciesNames,
        implementations: moleculeImplementations,
        uiCompImplementations: uiCompImplementations.filter((i) => i),
        componentConfiguration: component,
        userStory,
      });
      console.log(`generateComposedComponent: ${component.name} saved`);
    };
    await Promise.all(components.map(generateComponent));
  };
