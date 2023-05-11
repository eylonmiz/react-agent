import { ChatBot } from "../utils";

const componentsResponse = {
  type: "page",
  name: "AnalyticsDashboardPage",
  layout: "hidden flex-col md:flex",
  description: "SaaS Subscription Analytics Dashboard",
  components: [
    {
      type: "organism",
      name: "Header",
      layout: "flex h-16 items-center px-4 border-b",
      description: "",
    },
    {
      type: "atom",
      name: "DashboardContent",
      layout: "flex-1 space-y-4 p-8 pt-6",
      description: "",
      components: [
        {
          type: "organism",
          name: "SubHeader",
          layout: "flex items-center justify-between space-y-2",
          description: "",
          components: [
            {
              type: "atom",
              name: "SubHeaderTypography",
              layout: "w-32 h-8",
              description: "",
              components: [],
            },
            {
              type: "atom",
              name: "SubHeaderActions",
              layout: "flex items-center space-x-2",
              description: "",
            },
          ],
        },
        {
          type: "atom",
          name: "Tabs",
          layout: "space-y-4",
          description: "",
          components: [
            {
              type: "organism",
              name: "TabNav",
              layout:
                "w-80 inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              description: "",
              components: [],
            },
            {
              type: "atom",
              name: "TabsContent",
              layout:
                "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4",
              description: "",
              components: [
                {
                  type: "organism",
                  name: "SmallCardsContainer",
                  layout: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                  description: "",
                  components: [],
                },
                {
                  type: "organism",
                  name: "BigCardsContainer",
                  layout: "grid gap-4 md:grid-cols-2 lg:grid-cols-7",
                  description: "",
                  components: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
const pageResultExample = `
\`\`\`json
${JSON.stringify(componentsResponse)}
\`\`\`
`;

const GENERATE_FORM_PROMPT = `
As a front-end developer,
I want to create a comprehensive component tree with dependencies and compositions,
So that I can efficiently build a scalable and maintainable application.

**Acceptance Criteria:**
1. The component tree should include the names, descriptions of all components.
2. The component tree should indicate the dependencies between components (parent-child relationships).
3. The component tree should provide the type for each component.
4. The component tree should be organized in a hierarchical structure (e.g., atoms, molecules, organisms, pages).
5. layout field should be added to every component, which will be used to determine the layout of the component. atoms should have width and height, other components should also have layout like flex and grid to determine the layout of the component and child components. Use TailwindCSS styling for layout.

**Notes:** This component tree will be used as a reference for the development team and should be kept up-to-date as the application evolves.

**Component Tree Creation Process:**
1. **Identify Components:** Review the user story and any related UX/UI design assets (e.g., wireframes, mockups, prototypes) to identify the individual components that will make up the application.
2. **Organize Components:** Organize the components into a hierarchical structure (e.g., atoms, molecules, organisms, pages) to facilitate understanding of the component relationships and dependencies.
3. **Map Dependencies:** Determine the dependencies between components, such as parent-child relationships, and include this information in the component tree.
4. **Review & Refine:** Review the component tree with the development team, product owner, and UX/UI designer to ensure accuracy and completeness. Refine the component tree as necessary based on feedback and changes to the application requirements.

**Component Tree Interface**
\`\`\`typescript
interface Component {
  type: string;
  name: string;
  layout: string;
  description: string;
  components: Component[];
}
\`\`\`
---
Response Example:
${pageResultExample}
---
Return Type:
return a valid JSON format that I can use programmatically, copy paste your WHOLE RESPONSE in JSON.parse method.
DON'T ask for any additional information, just return a valid JSON
DON'T return any other information but the JSON response, no starting text, no ending text, just return one valid JSON
`;

export class ReactPageCompositionGenerator {
  private chatbot: ChatBot;
  private model: string;

  constructor() {
    this.model = "gpt-4";
    // this.model = "gpt-3.5-turbo";
    this.chatbot = new ChatBot(this.model);
  }

  async generateComposition({
    description,
  }: {
    description: string;
  }): Promise<any> {
    const messages = [
      { role: "system", content: GENERATE_FORM_PROMPT },
      { role: "user", content: description },
      {
        role: "user",
        content: `
      As a front-end developer,
      I want to create a comprehensive component tree with dependencies and compositions,
      So that I can efficiently build a scalable and maintainable application.
      
      **Acceptance Criteria:**
      1. The component tree should include the names, descriptions of all components.
      2. The component tree should indicate the dependencies between components (parent-child relationships).
      3. The component tree should provide the type for each component.
      4. The component tree should be organized in a hierarchical structure (e.g., atoms, molecules, organisms, pages).
      5. layout field should be added to every component, which will be used to determine the layout of the component. atoms should have width and height, other components should also have layout like flex and grid to determine the layout of the component and child components. Use TailwindCSS styling for layout.
      
      **Notes:** This component tree will be used as a reference for the development team and should be kept up-to-date as the application evolves.
      
      **Component Tree Creation Process:**
      1. **Identify Components:** Review the user story and any related UX/UI design assets (e.g., wireframes, mockups, prototypes) to identify the individual components that will make up the application.
      2. **Organize Components:** Organize the components into a hierarchical structure (e.g., atoms, molecules, organisms, pages) to facilitate understanding of the component relationships and dependencies.
      3. **Map Dependencies:** Determine the dependencies between components, such as parent-child relationships, and include this information in the component tree.
      4. **Review & Refine:** Review the component tree with the development team, product owner, and UX/UI designer to ensure accuracy and completeness. Refine the component tree as necessary based on feedback and changes to the application requirements.
      
      **Component Tree Interface**
      \`\`\`typescript
      interface Component {
        type: 'page' | 'organism' | 'molecule' | 'atom';
        name: string;
        layout: string;
        description: string;
        components: Component[];
      }
      \`\`\``,
      },
    ] as any;

    const response = await this.chatbot.getJsonResponse(messages);

    return response;
  }
}
