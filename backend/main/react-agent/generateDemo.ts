import fs from "fs/promises";
import path from "path";
import {
  getComponentName,
  saveFile,
  readCodeOfPage,
  readProps,
  LOCAL_COMPONENTS_DIR,
  checkIfFileExists,
} from "./utils";
import { ReactComponentGenerator } from "./generative";

export const componentGenerator = new ReactComponentGenerator();

export const generateDemo = async (containerPath: string) => {
  const dirPath = path.join(LOCAL_COMPONENTS_DIR, containerPath);
  const implementatioCode = await fs.readFile(`${dirPath}/index.tsx`, "utf8");
  const componentName = getComponentName(implementatioCode);
  const existingComponent = await checkIfFileExists(`${dirPath}/demo.tsx`);
  if (existingComponent) {
    console.log(`generateDemo: ${componentName} demo already exists`);
    return;
  }

  const componentExample = `import React from 'react';
import ${componentName} from './index';

const ${componentName}Demo = () => {
  return (
    {/* Your component implementation */}
  );
};

export default ${componentName}Demo;
`;
  const allProps = await readCodeOfPage(containerPath).then((res) =>
    res.map((c) => readProps(c.code)).join("\n")
  );

  const description = `
Create a demo for the component.
---
Here are the dependency props for the component:
${allProps}
${readProps(implementatioCode)}
---
Here is the component implementation:
${implementatioCode}
---
Here is a starter component, continue from here:
${componentExample}
---
Make sure the component does not recive any props as an input.
  `;

  const [componentCode] = await componentGenerator.generateComponent({
    description,
  });

  if (!componentCode) {
    console.error("Unable to generate component code");
    return;
  }

  await saveFile(dirPath, `demo.tsx`, componentCode);
  console.log(`generateDemo: ${componentName} demo saved`);
};
