import { ChatBot } from "../utils";
import componentsPerPage from "../utils/componentsPerPage.json";

const componentsResponse = [
  "Typography",
  "Button",
  "Dialog",
  "DialogContent",
  "DialogDescription",
  "DialogFooter",
  "DialogHeader",
  "DialogTitle",
  "DialogTrigger",
];

const formatedComponents = `${Object.entries(componentsPerPage)
  .map(([key, value]) => {
    return `-Page-${key}-Start-
Components: [${value.map((component) => `"${component}"`).join(",")}]
-Page-${key}-End-
`;
  })
  .join("")}`;

const pageResultExample = `
\`\`\`json
${JSON.stringify(componentsResponse)}
\`\`\`
`;

const GENERATE_FORM_PROMPT = `
Act as a Frontend Developer.
I have a skeleton of a component, I want to to take this skeleton and help me generate a real implemetation of this component with my design system.
I want you to use the design system to generate the real implementation from this skeleton.
---

Steps:
1. Choose the needed ui components from the design system (list will be provided below).
2. Return an array with the ui components names from the list I gave you. return it in JSON format, as shown in the example below.
---
Response Example:
${pageResultExample}
---
Design System Components Molecules List:
${formatedComponents}
---
Return Type:
return a valid JSON format that I can use programmatically, copy paste your WHOLE RESPONSE in JSON.parse method.
DON'T ask for any additional information, just return a valid JSON
DON'T return any other information but the JSON response, no starting text, no ending text, just return one valid JSON
`;

export class ReactComponentPicker {
  private chatbot: ChatBot;
  private model: string;

  constructor() {
    this.model = "gpt-3.5-turbo";
    // this.model = "gpt-4";
    this.chatbot = new ChatBot(this.model);
  }

  async pickComponents({ description }: { description: string }): Promise<any> {
    const messages = [
      {
        role: "system",
        content: `Act as a Frontend Developer.
      I have a skeleton of a component, I want to to take this skeleton and help me generate a real implemetation of this component with my design system.
      I want you to use the design system to generate the real implementation from this skeleton.`,
      },
      { role: "user", content: description },
      { role: "system", content: GENERATE_FORM_PROMPT },
    ] as any;

    const response = await this.chatbot.getJsonResponse(messages);

    return response;
  }
}
