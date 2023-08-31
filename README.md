# ReactAgent - The open-source React.js Autonomous LLM Agent
<div align="center">
  <a href="https://reactagent.io" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/tutim/image/upload/v1684019623/ReactAgent/flow_kzcpeb.jpg">
    <img src="https://res.cloudinary.com/tutim/image/upload/v1684019623/ReactAgent/flow_kzcpeb.jpg" alt="Logo"/>
  </picture>


  <p align="center">
    <h3>The open-source React.js Autonomous LLM Agent</h3>
    <br />
    <a href="https://www.loom.com/share/591fd03b54d04a74a15995815de47c76"><strong>Watch Demo »</strong></a>
    <br />
    <br />
    <a href="https://reactagent.io">Website</a>
    ·
    <a href="https://www.loom.com/share/658adb2869174e81a39a0a2cdcfec4eb">Watch Demo</a>
    ·
    <a href="https://github.com/eylonmiz/react-agent/pull/7/files">Demo Code Example</a>
    ·
    <a href="https://docs.reactagent.io">Docs</a>
    ·
    <a href="https://discord.gg/57JjYNKe">Discord</a>
  </p>
</p>

[![MIT License](https://img.shields.io/github/license/eylonmiz/react-agent)](https://github.com/eylonmiz/react-agent/blob/main/LICENSE) [![Number of GitHub stars](https://img.shields.io/github/stars/eylonmiz/react-agent?logo=github)](https://github.com/eylonmiz/react-agent/stargazers) [![Discord is Live](https://img.shields.io/badge/Discord-Live-green?logo=discord&logoColor=%23fff)](https://discord.gg/57JjYNKe) [![Docs are updated](https://img.shields.io/badge/docs-updated-green?color=blue)](https://docs.tutim.io) [![Product Hunt](https://img.shields.io/badge/Product%20Hunt-Launch%20soon-orange?logo=producthunt&logoColor=%23fff)](https://www.producthunt.com/@eylonmiz)

https://github.com/eylonmiz/react-agent/assets/43254163/d2e36b75-2901-4950-a4f6-6a39b1067796

</div>

---
## 📖 Introduction
ReactAgent is an experimental autonomous agent that uses GPT-4 language model to generate and compose React components from user stories. It is built with React, TailwindCSS, Typescript, Radix UI, Shandcn UI, and OpenAI API.

## 🚀 Features
- Generate React Components from user stories
- Compose React Components from existing components
- Use a local design system to generate React Components
- Use React, TailwindCSS, Typescript, Radix UI, Shadcn UI
- Built with Atomic Design Principles

## 😮 Example
<img src="https://github.com/eylonmiz/react-agent/assets/43254163/e5921e79-140d-4ccb-bbdf-96b2b28e2d77" alt="Example"/>

## 🌈 Quickstart
1. Clone repository
```bash
git clone git@github.com:eylonmiz/react-agent.git
```
2. Change to the project directory
```bash
cd react-agent
```
3. Get an OpenAI [API Key](https://platform.openai.com/account/api-keys)
4. Set OPENAI_SECRET_KEY in backend/main .env file (see .env.example) or run the script below
```bash
echo OPENAI_SECRET_KEY="INSERT_YOUR_OPENAI_SECRET_KEY_VALUE_HERE" >> backend/main/.env
```
5. Install dependencies
```bash
yarn install
```
6. Run Backend Script - This script generates the components
```bash
yarn backend:dev
```
7. Run Frontend App to see your components in action
```bash
yarn frontend:dev
```
8. Open frontend/main/src/GenReactApp.tsx
```bash
Read the instructions and change the example component to the component you generated
```
9. Read Project Customization Section
```bash
Read the Project Customization Section to learn how to customize and operate the project
```

## 📚 Documentation
- <a href="https://docs.reactagent.io">Docs Website</a>
- Some Docs and architecture in architecture folder
- <a href="https://github.com/eylonmiz/react-agent/blob/main/arch.md">Feature Flow</a>
- <a href="https://github.com/eylonmiz/react-agent/blob/main/architecture/Design%20Document%20Overview.md">Raw Design Docs</a>
- <a href="https://github.com/eylonmiz/react-agent/blob/main/personal-note.md">Personal Note</a>
## PRD / User Story to code
<a href="https://res.cloudinary.com/tutim/image/upload/v1683750575/ReactGPT/Feature_Flow_f8ih6c.jpg" target="_blank">
<img src="https://res.cloudinary.com/tutim/image/upload/v1683751641/ReactGPT/min-feature-flow_xkeyb5.png" alt="Feature Flow"/>
</a>

## Component Generation Flow
<a href="https://res.cloudinary.com/tutim/image/upload/v1683750585/ReactGPT/Component_Generation_atio0s.jpg" target="_blank">
<img src="https://res.cloudinary.com/tutim/image/upload/v1683751641/ReactGPT/min-component-generator_prs1u1.png" alt="Component Generator"/>
</a>



## 🛠️ Project Customization
1. Customize workflow:
   - file: backend/main/react-agent/generateComponents.ts
   - description: Can control the flow of the generation process, run step by step or full flow.
2. Render Application
   - file: frontend/main/src/GenReactApp.tsx
   - description: Render the generated application, see examples in the file.
     - use JsonSkeleton to render the skeleton of the page
     - use demo.tsx files to render the demo page
3. Generate React Components
   - folder: create a folder under LOCAL_COMPONENTS_DIR (default frontend/main/src/react-agent) (see .env.example file)
   - description: Generate a user-story.md file under the folder, make it as detailed as possible.
   - change CONTAINER_PATH in generateComponents.ts to the folder name
   - run the backend script to generate the React Components.
4. Customize Folder Structure (see .env.example file)
   - UI_COMPONENTS_DIR - Where your UI components are located
   - DEMO_COMPONENTS_DIR - Where your UI components demo files are located
   - LOCAL_COMPONENTS_DIR - Where your generated components are located


## 📦 Next Steps
- Edit existing components
- Test Components after generating
- Wireframe image to skeleton code
- Remote design system to generate React Components
- Use of external libraries
- Component logic control (state, props, context, effects, api calls, etc.)
## ⚠️ Limitations
- The generated code is not production-ready and should be used for prototyping purposes only.
- Only works well with GPT4, GPT-3.5 is not supported ATM, so make sure you have GPT4 enabled in your OpenAI account.
- The output may come with a few bugs and errors, so it is recommended to review and test the code before using it in a production environment, or even running it in a development environment.
- The first step of the generation process is to convert the user story into a JSON file. This step is not perfect and may result in some inaccuracies or missing information, consider changing the JSON file manually if necessary.
- Advised to run it step by step, and review the generated code after each step.

## 🛡 Disclaimer

This project, ReactAgent, is an experimental application and is provided "as-is" without any warranty, express or implied. By using this software, you agree to assume all risks associated with its use, including but not limited to data loss, system failure, or any other issues that may arise.

The developers and contributors of this project do not accept any responsibility or liability for any losses, damages, or other consequences that may occur as a result of using this software. You are solely responsible for any decisions and actions taken based on the information provided by ReactAgent.

**Please note that the use of the GPT-4 language model can be expensive due to its token usage.** By utilizing this project, you acknowledge that you are responsible for monitoring and managing your own token usage and the associated costs. It is highly recommended to check your OpenAI API usage regularly and set up any necessary limits or alerts to prevent unexpected charges.

As an autonomous experiment, ReactAgent may generate content or take actions that are not in line with real-world business practices or legal requirements. It is your responsibility to ensure that any actions or decisions made based on the output of this software comply with all applicable laws, regulations, and ethical standards. The developers and contributors of this project shall not be held responsible for any consequences arising from the use of this software.

By using ReactAgent, you agree to indemnify, defend, and hold harmless the developers, contributors, and any affiliated parties from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from your use of this software or your violation of these terms.

## 👨‍💻 Contribution
- Special thanks to https://github.com/shadcn/ui for the UI components library that made this project much easier to build
### 💪 By the community, for the community

![](https://contrib.rocks/image?repo=eylonmiz/react-agent)
Powered by [reactagent.io](https://reactagent.io)
- Co-created by @eylonmiz and @leetwito
