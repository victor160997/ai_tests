import { IInterationService } from "./interfaces/IInterationService";
import {
  ChatCompletionMessageParam,
  ChatCompletionTool,
} from "openai/resources/index.mjs";
import { OpenAICommunication } from "../api/openai/simpleCompletion";
import { BcApi } from "../api/bcApi/BcApi";

class CotationService implements IInterationService {
  private aiContext: OpenAICommunication;
  private BcApi: BcApi;
  private msgList: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "Você é um consultor financeiro que responde dúvidas sobre taxas de câmbio.",
    },
  ];
  private tools: ChatCompletionTool[] = [
    {
      type: "function",
      function: {
        name: "get_cotation_by_date",
        description:
          "Informa a cotação do dolar em real em uma data específica passada por parâmetro, sempre que houver uma pergunta relacionada a cotação do doalr, deve-se chamar essa funcção. Independente do formato da data na pergunta deve-se converter para MM-DD-AAAA",
        parameters: {
          type: "object",
          properties: {
            date: { type: "string", format: "MM-DD-AAAA" },
          },
          required: ["date"],
        },
      },
    },
  ];

  constructor() {
    this.BcApi = new BcApi();
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
      tools: this.tools,
      tool_choice: "auto",
    });

    const toolCalls = res?.tool_calls;

    if (toolCalls) {
      const availableFunctions = {
        get_cotation_by_date: this.BcApi.getCotationByDate,
      };
      this.msgList.push(res);

      for (const toolCall of toolCalls) {
        const functionName = toolCall.function.name;
        const functionToCall =
          availableFunctions[functionName as keyof typeof availableFunctions];
        const functionArgs = JSON.parse(toolCall.function.arguments);
        const functionResponse = await functionToCall(functionArgs.date);
        this.msgList.push({
          tool_call_id: toolCall.id,
          role: "tool",
          content: functionResponse.value[0].cotacaoCompra.toString(),
        });
      }

      const secondRes = await this.aiContext.getResponse({
        messages: this.msgList,
        model: "gpt-4-0125-preview",
      });

      this.msgList.push({
        role: "assistant",
        content: secondRes?.content,
      });

      return secondRes;
    }

    this.msgList.push({
      role: "assistant",
      content: res?.content,
    });

    return res;
  }
}

export default CotationService;
