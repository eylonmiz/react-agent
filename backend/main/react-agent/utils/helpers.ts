import fs from "fs/promises";
import path from "path";
import componentsPerPage from "./componentsPerPage.json";
import { readComponentDemo, readUiComponents } from "./read";

export interface Component {
  type: string;
  name: string;
  layout: string;
  description: string;
  components: Component[];
  uiComponents?: string[];
}

export const getComponentName = (fileString: string): string => {
  const exportRegex = /export\s+default\s+(\w+)/;
  const match = fileString.match(exportRegex);
  if (!match || match.length < 2) {
    throw new Error("Unable to extract default export from file.");
  }
  return match[1];
};

export function flattenComponents(composition: Component): {
  [componentName: string]: Component;
} {
  const flattenedComponents: { [componentName: string]: Component } = {};

  function flatten(component: Component) {
    flattenedComponents[component.name] = component;
    component.components.forEach(flatten);
  }

  composition.components.forEach(flatten);

  return flattenedComponents;
}

export async function saveFile(
  dirPath: string,
  filename: any,
  componentCode: any
) {
  const dataFilePath = path.join(dirPath, filename);
  await fs.writeFile(dataFilePath, componentCode);
}

export const checkIfFileExists = async (filePath: string) => {
  try {
    const existingFile = await fs.readFile(filePath, "utf8");
    return !!existingFile;
  } catch (err) {
    return false;
  }
};

export const parseComposition = (composition: Component) => {
  const configurations = flattenComponents(composition);
  const componenets = Object.values(configurations);
  const atoms = componenets.filter((c) => c.type === "atom");
  const molecules = componenets.filter((c) => c.type === "molecule");
  const organisms = componenets.filter((c) => c.type === "organism");
  const parsedComposition = {
    atoms,
    molecules,
    organisms,
    composition,
  };
  return parsedComposition;
};

export const getImplementationsExample = (implementations: any[]) => {
  if (implementations.length === 0) return "";
  const maxLength = 30000 / implementations.length;

  const chooseImpl = (impl: any) => {
    if (impl.length.uiComponentCode + impl.length.demoCode < maxLength)
      return parseImplementation(impl);
    if (impl.length.demoCode < maxLength)
      return parseImplementation({ ...impl, demoOnly: true });

    return "";
  };

  const text = implementations.map(chooseImpl).filter(Boolean).join("\n");
  return text;
};

const parseImplementation = ({
  componentName,
  uiComponentCode,
  demoCode,
  demoOnly,
}: any) => {
  if (demoOnly) {
    return `----${componentName} START----
Implementation Example:
${demoCode}
----${componentName} END----
`;
  }
  return `
----${componentName} START----
Components Code: 
${uiComponentCode}
---
Implementation Example: 
${demoCode}
----${componentName} END----
`;
};

export function getPageName(
  componentName: string,
  componentsPerPage: Record<string, string[]>
): string | undefined {
  for (const [pageName, components] of Object.entries(componentsPerPage)) {
    if (components.includes(componentName)) {
      return pageName;
    }
  }
  return undefined;
}

const componentsMap = Object.values(componentsPerPage).reduce(
  (acc, components) => {
    components.forEach((component) => {
      acc[component] = true;
    });
    return acc;
  }
);

export const doesComponentExist = (componentName: string) => {
  return componentsMap[componentName];
};

export const getComponentImplementation = async (componentName: string) => {
  const pageName = getPageName(componentName, componentsPerPage);
  if (!pageName) return null;

  const [uiComponentCode, demoCode] = await Promise.all([
    readUiComponents(pageName),
    readComponentDemo(pageName),
  ]);
  return {
    componentName,
    uiComponentCode,
    demoCode,
    length: {
      uiComponentCode: uiComponentCode.length,
      demoCode: demoCode.length,
    },
  };
};

export function replaceDoubleSpaces(content: string) {
  // Split the input string into lines
  const lines = content.split("\n");

  // Iterate through each line and replace double spaces with single spaces
  const processedLines = lines.map((line) => line.replace(/ {2,}/g, " "));

  // Join the processed lines back together with new lines
  const result = processedLines.join("\n");

  return result;
}
