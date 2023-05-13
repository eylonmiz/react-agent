import fs from "fs/promises";
import path from "path";
import {
  Component,
  getComponentImplementation,
  parseComposition,
  readComponentsConfigurations,
  readUserStory,
  LOCAL_COMPONENTS_DIR,
  getImplementationsExample,
  saveFile,
  checkIfFileExists,
} from "./utils";
import { ReactComponentGenerator } from "./generative";

export const componentGenerator = new ReactComponentGenerator();

export const saveComponent =
  (dirPath: string) =>
  async ({
    componentName,
    dependencies,
    implementations,
    componentConfiguration,
    userStory,
  }: any) => {
    const depString = dependencies.length
      ? `import { ${dependencies.join(", ")} } from '@react-agent/shadcn-ui';\n`
      : "";
    const componentExample = `import React from 'react';
${depString}
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
Dependencies:
${dependencies}
---
Implementations:
${getImplementationsExample(implementations)}
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

export const generateComponentsFromConfigurations = async (
  containerPath: string
) => {
  const dir = LOCAL_COMPONENTS_DIR;
  const dirPath = path.join(dir, containerPath);
  const configurations = await readComponentsConfigurations(dirPath);

  const userStory = await readUserStory(dirPath);
  const components = configurations.filter(
    (config) => config.type === "molecule"
  );

  const generateComponent = async (component: Component) => {
    const implementations = await Promise.all(
      component.uiComponents.map(getComponentImplementation)
    );

    const parentComponent = configurations
      .filter((config) => config.type === "organism")
      .find((c) =>
        parseComposition(c)
          .molecules.map((c) => c.name)
          .includes(component.name)
      );

    const componentDir = path.join(
      dirPath,
      parentComponent?.name || "",
      component.name
    );

    await fs.mkdir(componentDir, { recursive: true });

    const existingComponent = await checkIfFileExists(
      path.join(componentDir, "index.tsx")
    );
    if (existingComponent) {
      console.log(
        `generateComponent: skipping - Component ${component.name} already exists`
      );
      return;
    } else {
      console.log(`generateComponent: generating Component ${component.name}`);
    }

    await saveComponent(componentDir)({
      componentName: component.name,
      dependencies: component.uiComponents,
      implementations: implementations.filter((i) => i),
      componentConfiguration: component,
      userStory,
    });
    console.log(`generateComponent: ${component.name} saved`);
  };
  await Promise.all(components.map(generateComponent));
};
