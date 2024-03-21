import OpenAIApi from "openai";
import { config } from "dotenv";
import { ChatCompletionCreateParamsNonStreaming } from "openai/resources/index.mjs";

export class OpenAICommunication {
  constructor() {
    config();
  }

  async getResponse(
    interation: ChatCompletionCreateParamsNonStreaming
  ): Promise<string | undefined> {
    try {
      const openAIKey = process.env.OPENAI_API_KEY;

      const openai = new OpenAIApi({
        apiKey: openAIKey,
      });

      const completion = await openai.chat.completions.create(interation);
      const res = completion.choices[0].message.content;
      return res || "Não foi possível obter uma resposta";
    } catch (error) {
      console.error(error);
    }
  }
}
