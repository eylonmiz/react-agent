import fs from "fs/promises";
import path from "path";
import { ReactComponentStoryBookGenerator } from "./generative";
import {
  checkIfFileExists,
  getComponentName,
  readCodeOfPage,
  saveFile,
} from "./utils";

const storyBookGenerator = new ReactComponentStoryBookGenerator();

export const saveComponentStoryBook =
  (dirPath: string) =>
  async ({ code, componentName }: { code: string; componentName: string }) => {
    const componentExample = `import React from 'react';
    import { Story, Meta } from '@storybook/react';
    import ${componentName}, { ${componentName}Props } from './index';
    
    export default {
     title: 'Components/${componentName}',
     component: ${componentName},
     argTypes: {},
    } as Meta;
    
    const Template: Story<${componentName}Props> = (args) => <OverviewCard {...args} />;
    
    export const Default = Template.bind({});
    Default.args = {};`;

    const description = `
    Create a storybook for the component.
    ---
    Here is the component implementation:
    ${code}
    ---
    Here is a starter component, continue from here:
    ${componentExample}

      `;
    const storyCode = await storyBookGenerator.generateComponentStoryBook({
      description,
    });

    if (!storyCode) {
      console.error("Unable to generate storybook code");
      return;
    }

    await saveFile(dirPath, `${componentName}.stories.tsx`, storyCode);
  };

export const generateComponentsStoryBook = async (containerPath: string) => {
  const code = await readCodeOfPage(containerPath);

  const getComponentNameAndContainerPath = ({ fileName, code }) => {
    const name = getComponentName(code);
    const folder = fileName.split("/").slice(0, -1).join("/");
    return { folder, name };
  };

  const meta = code.map((c) => ({
    code: c.code,
    ...getComponentNameAndContainerPath(c),
  }));

  const generateStoryBook = async (component: {
    folder: any;
    name: string;
    code: string;
  }) => {
    const existingComponent = await checkIfFileExists(
      path.join(component.folder, `${component.name}.stories.tsx`)
    );
    if (existingComponent) {
      console.log(
        `generateComponentsStoryBook: skipping - Component ${component.name} storybook already exists`
      );
      return;
    } else {
      console.log(
        `generateComponentsStoryBook: generating Component ${component.name} storybook`
      );
    }
    await saveComponentStoryBook(component.folder)({
      componentName: component.name,
      code: component.code,
    });
    console.log(`generateStoryBook: ${component.name} storybook saved`);
  };
  await Promise.all(meta.map(generateStoryBook));
};
