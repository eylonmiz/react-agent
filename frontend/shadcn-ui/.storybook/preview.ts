import type { Preview } from '@storybook/react';
// .storybook/preview.js

// import '../dist/output.css'; // replace with the name of your tailwind css file
import '../src/input.css'; // replace with the name of your tailwind css file

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
