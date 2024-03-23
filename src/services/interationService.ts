import OpenAI from "openai";
import { IInterationService } from "./interfaces/IInterationService";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { OpenAICommunication } from "../api/openai/simpleCompletion";

class InterationService implements IInterationService {
  private aiContext: OpenAICommunication;
  private msgList: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: "Você é uma simpática assistente que responde dúvidas.",
    },
  ];

  constructor() {
    this.aiContext = new OpenAICommunication();
  }

  async interation(msg: string): Promise<string> {
    const res = await this.addInteration(msg);
    return res?.content || "Não foi possível obter uma resposta";
  }

  private async addInteration(msg: string) {
    this.msgList.push({
      role: "user",
      content: [
        {
          type: "text",
          text: msg,
        },
      ],
    });

    const res = await this.aiContext.getResponse({
      messages: this.msgList,
      model: "gpt-4-0125-preview",
    });

    this.msgList.push({
      role: "assistant",
      content: res?.content,
    });

    return res;
  }
}

export default InterationService;
