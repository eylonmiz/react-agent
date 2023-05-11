import fs from "fs/promises";
import path from "path";
import {
  UI_COMPONENTS_DIR,
  DEMO_COMPONENTS_DIR,
  LOCAL_COMPONENTS_DIR,
} from "./const";
import { Component, replaceDoubleSpaces } from "./helpers";

export const readUserStory = async (dirPath: string) => {
  const userStoryFilePath = path.join(dirPath, "user-story.md");
  const userStory = await fs.readFile(userStoryFilePath, "utf8");
  return userStory;
};

export const readComponentsConfigurations = async (
  dirPath: string
): Promise<Component[]> => {
  const configurationFilePath = path.join(dirPath, "components.json");
  const configurationCode = await fs.readFile(configurationFilePath, "utf8");
  const configuration = JSON.parse(configurationCode);
  return configuration;
};

export const readComponentsComposition = async (dirPath: string) => {
  const compositionFilePath = path.join(dirPath, "composition.json");
  const compositionCode = await fs.readFile(compositionFilePath, "utf8");
  const composition = JSON.parse(compositionCode);
  return composition;
};

export const readUiComponents = async (componentName: string) => {
  const componentFilePath = path.join(
    UI_COMPONENTS_DIR,
    `${componentName}.tsx`
  );
  const componentCode = await fs.readFile(componentFilePath, "utf8");
  return componentCode;
};

export const readComponentDemo = async (componentName: string) => {
  const demoFilePath = path.join(
    DEMO_COMPONENTS_DIR,
    componentName,
    `demo.tsx`
  );
  const demoCode = await fs.readFile(demoFilePath, "utf8");
  return demoCode;
};

export const readMoleculeComponent =
  (containerPath: string) => async (componentName: string) => {
    const componentFilePath = path.join(
      containerPath,
      componentName,
      `index.tsx`
    );
    const componentCode = await fs.readFile(componentFilePath, "utf8");
    return componentCode;
  };

export async function readFilesRecursively(dirPath: string): Promise<string[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const fileNames: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      fileNames.push(...(await readFilesRecursively(fullPath)));
    } else if (entry.isFile()) {
      fileNames.push(fullPath);
    }
  }

  return fileNames;
}

export const readProps = (componentCode: string) => {
  const exportStart = componentCode.indexOf("export interface");
  const exportEnd = componentCode.indexOf("const");
  const slice = componentCode.slice(exportStart, exportEnd);
  return slice;
};

export const readCodeOfPage = async (containerPath: string) => {
  const dir = path.join(LOCAL_COMPONENTS_DIR, containerPath);
  const fileNames = await readFilesRecursively(dir);

  const componentsPaths = fileNames
    .filter((f) => !f.endsWith("stories.tsx"))
    .filter((f) => f.endsWith(".tsx"));
  const code = await Promise.all(
    componentsPaths.map(async (f) => {
      const componentCode = await fs.readFile(f, "utf8");
      return { fileName: f, code: replaceDoubleSpaces(componentCode) };
    })
  );

  return code;
};
