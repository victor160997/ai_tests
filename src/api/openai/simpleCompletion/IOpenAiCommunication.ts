import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessage,
} from "openai/resources/index.mjs";

export interface IOpenAiCommunication {
  getResponse(
    interation: ChatCompletionCreateParamsNonStreaming
  ): Promise<ChatCompletionMessage | undefined>;
}
