import OpenAIApi from "openai";
import { config } from "dotenv";
import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessage,
} from "openai/resources/index.mjs";
import { IOpenAiCommunication } from "./IOpenAiCommunication";

export class OpenAICommunication implements IOpenAiCommunication {
  constructor() {
    config();
  }

  async getResponse(
    interation: ChatCompletionCreateParamsNonStreaming
  ): Promise<ChatCompletionMessage | undefined> {
    try {
      const openAIKey = process.env.OPENAI_API_KEY;

      const openai = new OpenAIApi({
        apiKey: openAIKey,
      });

      const completion = await openai.chat.completions.create(interation);
      const res = completion.choices[0].message;
      return res;
    } catch (error) {
      console.error(error);
    }
  }
}
