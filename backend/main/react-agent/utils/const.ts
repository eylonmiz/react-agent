import path from "path";

const rootDir = path.join(__dirname, "..", "..", "..", "..");
export const UI_COMPONENTS_DIR =
  process.env.UI_COMPONENTS_DIR ||
  path.join(rootDir, "/frontend/shadcn-ui/src/components/ui");

export const DEMO_COMPONENTS_DIR =
  process.env.DEMO_COMPONENTS_DIR ||
  path.join(rootDir, "/frontend/shadcn-ui/src/components/examples");

export const LOCAL_COMPONENTS_DIR =
  process.env.LOCAL_COMPONENTS_DIR ||
  path.join(rootDir, "/frontend/main/src/react-agent");
