import path from "path";
import {
  readUserStory,
  LOCAL_COMPONENTS_DIR,
  saveFile,
  readComponentsComposition,
} from "./utils";
import { ReactPageCompositionGenerator } from "./generative";

const pageCompositor = new ReactPageCompositionGenerator();

export const saveSkeletonComposition =
  (dirPath: string) => async (userStory: string) => {
    const description = `
    ---
    User Story: 
    ${userStory}
    `;
    const composition = await pageCompositor.generateComposition({
      description,
    });

    await saveFile(
      dirPath,
      `composition.json`,
      JSON.stringify(composition, null, 2)
    );
  };

export const generateSkeletonCompositionFromStory = async (
  containerPath: string
) => {
  const dir = LOCAL_COMPONENTS_DIR;
  const dirPath = path.join(dir, containerPath);
  const userStory = await readUserStory(dirPath);
  try {
    const composition = await readComponentsComposition(dirPath);
    if (composition) {
      console.log(
        `generateSkeletonCompositionFromStory: skipping - composition already exists`
      );
      return;
    }
  } catch (e) {
    console.log(
      `generateSkeletonCompositionFromStory: generating configuration`
    );
  }

  await saveSkeletonComposition(dirPath)(userStory);
  console.log(`generateSkeletonCompositionFromStory: composition saved`);
};
