import { ChatBot } from "../utils";

const responseExample = `
\`\`\`tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FieldProps } from '../../types';
import MultiCheckboxField from './index';

export default {
  title: 'Fields/MultiCheckboxField',
  component: MultiCheckboxField,
} as Meta;

const fieldConfig = {
  key: 'firstName',
  label: 'Field Display Name',
  isDisabled: false,
  type: 'text',
  isRequired: false,
  options: [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
  ],
};

const Template: Story<FieldProps> = (args) => <MultiCheckboxField {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  inputProps: { value: '', onChange: () => {} },
  fieldConfig,
};

export const Value = Template.bind({});
Value.args = {
  inputProps: { value: '5', onChange: () => {} },
  fieldConfig,
};

export const Error = Template.bind({});
Error.args = {
  inputProps: { value: '', onChange: () => {} },
  fieldConfig,
  fieldState: { error: { message: 'This field is required' } },
};

export const Required = Template.bind({});
Required.args = {
  inputProps: { value: '', onChange: () => {} },
  fieldConfig: { ...fieldConfig, isRequired: true },
};

export const Disabled = Template.bind({});
Disabled.args = {
  inputProps: { value: '', onChange: () => {} },
  fieldConfig: { ...fieldConfig, isDisabled: true },
};
\`\`\`
`;

const inputExample = `
import React, { ChangeEvent } from 'react';
import { FieldProps } from '../../types';

const MultiCheckboxField: React.FC<FieldProps> = ({ fieldConfig, inputProps, fieldState, innerRef }) => {
  const { key, label, options = [], isDisabled, isRequired } = fieldConfig;
  const { value, onChange } = inputProps;
  const { invalid, error } = fieldState || {};

  const handleChange = (optionValue: string | number) => (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = [...value];
    if (e.target.checked) {
      newValue.push(optionValue);
    } else {
      newValue = newValue.filter((val) => val !== optionValue);
    }
    onChange(newValue);
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={key} className="text-sm font-medium text-gray-700">
          {label}
          {isRequired && <span className="text-red-600">*</span>}
        </label>
      )}

      <div className="mt-2 space-y-2">
        {options.map(({ value: optionValue, label: optionLabel, disabled }) => (
          <label
            className="inline-flex items-center space-x-2 cursor-pointer text-gray-800"
          >
            <input
              ref={innerRef}
              type="checkbox"
              name={key}
              checked={value.includes(optionValue)}
              value={optionValue}
              disabled={isDisabled || disabled}
              required={isRequired}
              onChange={handleChange(optionValue)}
              className="rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className="text-sm">{optionLabel}</span>
          </label>
        ))}
      </div>

      {invalid && (
        <div className="transition text-red-500 text-xs mt-1" role="alert">
          {error?.message || 'This field is required.'}
        </div>
      )}
    </div>
  );
};

export default MultiCheckboxField;
`;

const GENERATE_FORM_PROMPT = `
Act as a Frontend Developer.
Create Typescript File for storybook based on the component (import '@storybook/react').
Make sure it covers all the use cases and states.
---
Instructions:
Make sure it's a working code, don't assume that I'm going to change or implement anything.
Assume I have storybook setup in my project.
The component is in the same folder as your code, and is exported as default, use this synatx to import: import ComponentName from './ComponentName';
---
Return Type:
return a React storybook file of the component, written in Typescript, using storybook.
return your code inside tsx/typescript markdown \`\`\`tsx <Your Code Here> \`\`\`.
`;

export class ReactComponentStoryBookGenerator {
  private chatbot: ChatBot;
  private model: string;

  constructor() {
    this.model = "gpt-3.5-turbo";
    // this.model = "gpt-4";
    this.chatbot = new ChatBot(this.model);
  }

  async generateComponentStoryBook({
    description,
    useExampleFlow = false,
  }: {
    description: string;
    current?: any;
    useExampleFlow?: boolean;
  }): Promise<any> {
    const exampleFlow = [
      {
        role: "user",
        content: inputExample,
      },
      {
        role: "assistant",
        content: responseExample,
      },
    ];
    const messages = [
      { role: "system", content: GENERATE_FORM_PROMPT },
      ...(useExampleFlow ? exampleFlow : []),
      { role: "user", content: description },
      {
        role: "user",
        content:
          "Generate a React Storybook file in typescript based on the above component (last message), make sure to return your code in tsx/typescript markdown ```tsx <Your Code Here> ```",
      },
    ] as any;
    const response = await this.chatbot.getTypescriptResponse(messages);
    return response[0];
  }
}
