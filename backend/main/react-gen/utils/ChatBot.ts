import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessage,
  ChatCompletionResponseMessage,
  CreateChatCompletionResponseChoicesInner,
} from "openai";

const apiKey = process.env.OPENAI_SECRET_KEY;
const shouldLog = process.env.OPENAI_LOG === "true";
const defaultModel = "gpt-4";

const getJsonFromMarkupText = (text: string) => {
  try {
    const jsonParse = JSON.parse(text);
    if (typeof jsonParse === "object") {
      return jsonParse;
    } else {
      throw new Error("Invalid JSON response");
    }
  } catch (err) {
    try {
      const jsonStart = text.indexOf("```");
      const isJsonMarkup = text.indexOf("```json") !== -1;
      const jsonEnd = text.lastIndexOf("```");
      const jsonText = text.substring(
        jsonStart + (isJsonMarkup ? 7 : 3),
        jsonEnd
      );

      const json = JSON.parse(jsonText);
      return json;
    } catch (markupParseError) {
      console.debug(markupParseError);
      throw new Error("Invalid JSON response");
    }
  }
};

const getJsxFromMarkupText = (text: string) => {
  try {
    const jsxStart = text.indexOf("```");
    if (jsxStart === -1) {
      console.error("Invalid jsx response");
      return "";
    }
    const tsxMarkupPosition = text.indexOf("```tsx");
    const typesriptMarkupPosition = text.indexOf("```typescript");

    if (tsxMarkupPosition !== -1) {
      const jsxEnd = text.indexOf("```", tsxMarkupPosition + 3);
      const typescriptText = text.substring(jsxStart + 6, jsxEnd);
      return typescriptText;
    } else if (typesriptMarkupPosition !== -1) {
      const jsxEnd = text.indexOf("```", typesriptMarkupPosition + 3);
      const isTypescriptMarkup = text.indexOf("```typescript") !== -1;
      const typescriptText = text.substring(
        jsxStart + (isTypescriptMarkup ? 13 : 3),
        jsxEnd
      );
      return typescriptText;
    } else {
      const jsxEnd = text.indexOf("```", jsxStart + 3);
      const typescriptText = text.substring(jsxStart + 3, jsxEnd);
      return typescriptText;
    }
  } catch (markupParseError) {
    console.debug(markupParseError);
    throw new Error("Invalid jsx response");
  }
};

const getAllJsxFromMarkupText = (
  text: string,
  foundMarkups: string[] = []
): string[] => {
  try {
    const jsxStart = text.indexOf("```");
    if (jsxStart === -1) {
      return foundMarkups;
    }
    const tsxMarkupPosition = text.indexOf("```tsx", jsxStart);
    const typescriptMarkupPosition = text.indexOf("```typescript", jsxStart);

    if (tsxMarkupPosition !== -1) {
      const jsxEnd = text.indexOf("```", tsxMarkupPosition + 6);
      const typescriptText = text.substring(tsxMarkupPosition + 6, jsxEnd);
      foundMarkups.push(typescriptText);
      const restOfText = text.substring(jsxEnd + 3);
      return getAllJsxFromMarkupText(restOfText, foundMarkups);
    } else if (typescriptMarkupPosition !== -1) {
      const jsxEnd = text.indexOf("```", typescriptMarkupPosition + 13);
      const typescriptText = text.substring(
        typescriptMarkupPosition + 13,
        jsxEnd
      );
      foundMarkups.push(typescriptText);
      const restOfText = text.substring(jsxEnd + 3);
      return getAllJsxFromMarkupText(restOfText, foundMarkups);
    } else {
      const genericJsxStart = text.indexOf("```", jsxStart);
      const jsxEnd = text.indexOf("```", genericJsxStart + 3);
      if (jsxEnd !== -1) {
        const typescriptText = text.substring(genericJsxStart + 3, jsxEnd);
        foundMarkups.push(typescriptText);
        const restOfText = text.substring(jsxEnd + 3);
        return getAllJsxFromMarkupText(restOfText, foundMarkups);
      } else {
        return foundMarkups;
      }
    }
  } catch (markupParseError) {
    console.debug(markupParseError);
    throw new Error("Invalid jsx response");
  }
};

function replaceDoubleSpaces(content: string) {
  // Split the input string into lines
  const lines = content.split("\n");

  // Iterate through each line and replace double spaces with single spaces
  const processedLines = lines.map((line) => line.replace(/ {2,}/g, " "));

  // Join the processed lines back together with new lines
  const result = processedLines.join("\n");

  return result;
}

const removeSpacesFromMessages = (messages: ChatCompletionRequestMessage[]) => {
  return messages.map((message) => {
    return {
      ...message,
      content: replaceDoubleSpaces(message.content),
    };
  });
};

class ChatBot {
  private openai: OpenAIApi;
  private model: string;

  constructor(model: string = defaultModel) {
    const configuration = new Configuration({
      apiKey,
    });
    this.openai = new OpenAIApi(configuration);
    this.model = model;
  }

  async callChat(
    messages: ChatCompletionRequestMessage[]
  ): Promise<CreateChatCompletionResponseChoicesInner[]> {
    const apiMessages = removeSpacesFromMessages(messages);
    if (shouldLog) console.debug(`ChatBot ~ Request:`, apiMessages);
    const response = await this.openai.createChatCompletion({
      model: this.model,
      messages: apiMessages,
      // temperature: 0,
    });
    if (shouldLog) console.debug(`ChatBot ~ response:`, response.data);

    const { choices } = response.data;
    return choices;
  }

  async getResponse(prompt: string): Promise<ChatCompletionResponseMessage> {
    const apiMessages: ChatCompletionRequestMessage[] = [
      { role: "system", content: prompt },
    ];

    const choices = await this.callChat(apiMessages);
    const rawMessage = choices[0].message;
    if (!rawMessage) throw new Error("No response from OpenAI");
    if (shouldLog) console.debug(`ChatBot ~ message:`, rawMessage);
    return rawMessage;
  }

  async getTypescriptResponse(
    messages: ChatCompletionRequestMessage[]
  ): Promise<any> {
    const choices = await this.callChat(messages);
    const rawMessage = choices[0].message;
    if (shouldLog) console.debug(`ChatBot ~ message:`, rawMessage);
    if (!rawMessage) throw new Error("No response from OpenAI");

    try {
      const message = getAllJsxFromMarkupText(rawMessage.content, []);

      if (shouldLog) console.debug(`ChatBot ~ parsed:`, message);
      return message;
    } catch (error) {
      console.debug(error);
    }
  }

  async getJsonResponse(
    messages: ChatCompletionRequestMessage[]
  ): Promise<any> {
    const choices = await this.callChat(messages);
    const rawMessage = choices[0].message;
    if (shouldLog) console.debug(`ChatBot ~ message:`, rawMessage);
    if (!rawMessage) throw new Error("No response from OpenAI");

    try {
      const message = getJsonFromMarkupText(rawMessage.content);

      if (shouldLog) console.debug(`ChatBot ~ parsed:`, message);
      return message;
    } catch (error) {
      console.debug(error);
    }
  }
}

export { ChatBot };
