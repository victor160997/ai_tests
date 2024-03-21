import { ChatCompletionCreateParamsNonStreaming } from "openai/resources/index.mjs";

export interface IOpenAiCommunication {
  getResponse(
    interation: ChatCompletionCreateParamsNonStreaming
  ): Promise<string | undefined>;
}
