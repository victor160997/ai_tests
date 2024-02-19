import OpenAIApi from "openai";

export class OpenAI {
  constructor() {}

  async getResponse() {
    try {
      const openAIKey = "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";
      const imageURL =
        "https://i0.wp.com/www.odontoi.com.br/wp-content/uploads/2019/04/RADIOGRAFIA-PANORAMICA-0.jpeg?fit=2440%2C1292&ssl=1";

      const openai = new OpenAIApi({
        apiKey: openAIKey,
      });
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `
                  Liste algumas sugestões de melhoria na UX/UI desse site """https://querobolsa.com.br/carreiras-e-profissoes/eletricista#:~:text=O%20eletricista%20%C3%A9%20o%20profissional,redes%20de%20distribui%C3%A7%C3%A3o%20de%20energia."""
                `,
              },
            ],
          },
        ],
        model: "gpt-4-0125-preview",
      });
      const res = completion.choices[0];
      return res;
    } catch (error) {
      console.error(error);
    }
  }
}
