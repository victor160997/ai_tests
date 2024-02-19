"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_js_1 = require("./api/openai/index.js");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.json({
        message: "Hello World",
    });
});
app.get("/read", async (_req, res) => {
    const openai = new index_js_1.OpenAI();
    const response = await openai.getResponse();
    res.json({
        res: response,
    });
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
