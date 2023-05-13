import path from "path";
import {
  Component,
  flattenComponents,
  saveFile,
  readComponentsComposition,
  LOCAL_COMPONENTS_DIR,
  doesComponentExist,
  readComponentsConfigurations,
} from "./utils";
import { ReactComponentPicker } from "./generative";

const componentsPickerGenerator = new ReactComponentPicker();

export const generateComponentsConfigurations = async (
  containerPath: string
) => {
  const dir = LOCAL_COMPONENTS_DIR;
  const dirPath = path.join(dir, containerPath);
  const composition = await readComponentsComposition(dirPath);
  try {
    const configuration = await readComponentsConfigurations(dirPath);
    if (configuration) {
      console.log(
        `generateComponentsConfigurations: skipping - configuration already exists`
      );
      return;
    }
  } catch (e) {
    console.log(`generateComponentsConfigurations: generating configuration`);
  }
  const configurations = flattenComponents(composition);
  const components = Object.values(configurations).filter(
    (c) => c.type !== "atom"
  );

  const getFullConfigurations = async (component: Component) => {
    try {
      const uiComponents = await componentsPickerGenerator.pickComponents({
        description: JSON.stringify(component),
      });
      // filter non existing components
      const existingComponents = uiComponents.filter(doesComponentExist);
      return { ...component, uiComponents: existingComponents };
    } catch (e) {
      console.error(e);
      return component;
    }
  };

  const componentsConfigurations = await Promise.all([
    ...components.map(getFullConfigurations),
    getFullConfigurations(composition), // Page configuration
  ]);
  await saveFile(
    dirPath,
    `components.json`,
    JSON.stringify(componentsConfigurations, null, 2)
  );
  console.log(`generateComponentsConfigurations: configuration saved`);
};
