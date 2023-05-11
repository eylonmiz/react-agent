import { generateSkeletonCompositionFromStory } from "./generateSkeletonCompositionFromStory";
import { generateComponentsConfigurations } from "./generateComponentsConfigurations";
import { generateComponentsFromConfigurations } from "./generateComponentsFromConfigurations";
import { generateComposedComponent } from "./generateComposedComponent";
import { generateDemo } from "./generateDemo";
// import { generateComponentsStoryBook } from "./generateComponentsStoryBook";

const step1 = generateSkeletonCompositionFromStory;
const step2 = generateComponentsConfigurations;
const step3 = generateComponentsFromConfigurations;
const step4 = generateComposedComponent("organism");
const step5 = generateComposedComponent("page");
const step6 = generateDemo;
// const step7 = generateComponentsStoryBook;

const fullFlow = async (containerPath: string) => {
  await step1(containerPath); // Advised manual step: Verify skeleton with <JsonSkeleton json={jsonComposition} /> before proceeding
  await step2(containerPath); // Advised manual step: Verify uiComponents, make sure they fit the skeleton and user story
  await step3(containerPath); // Advised manual step: Verify components, delete components and re-generate them if needed
  await step4(containerPath); // Advised manual step: Verify components, delete components and re-generate them if needed
  await step5(containerPath); // Advised manual step: Verify components, delete components and re-generate them if needed
  await step6(containerPath);
  // await step7(containerPath);
};

const CONTAINER_PATH = "AnalyticsDashboard";
export const generateComponents = async () => {
  console.log("generateComponents start");
  await fullFlow(CONTAINER_PATH);
  console.log("generateComponents end");
};
