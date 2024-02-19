"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAI = void 0;
const openai_1 = require("@langchain/openai");
const messages_1 = require("@langchain/core/messages");
class OpenAI {
    constructor() {
        this.chatOpenAI = new openai_1.ChatOpenAI({
            modelName: "gpt-4-vision-preview",
            maxTokens: 1024,
            openAIApiKey: "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",
        });
    }
    async getResponse() {
        const hostedImageMessage = new messages_1.HumanMessage({
            content: [
                {
                    type: "text",
                    text: "What does this image say?",
                },
                {
                    type: "image_url",
                    image_url: "https://www.freecodecamp.org/news/content/images/2023/05/Screenshot-2023-05-29-at-5.40.38-PM.png",
                },
            ],
        });
        try {
            const res = await this.chatOpenAI.invoke([hostedImageMessage]);
            return res;
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.OpenAI = OpenAI;
