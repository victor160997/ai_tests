import express from "express";
import { OpenAI } from "./api/openai";
import CompanyService from "./services/companyService";
import CompanyRouter from "./api/routes/company";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Hello World",
  });
});

const companyRouter = new CompanyRouter();
app.use("/company", companyRouter.getRouter());

// app.get("/read", async (_req, res) => {
//   const openai = new OpenAI();

//   const companyService = new CompanyService();
//   const response = await companyService.createCompany();

//   res.json({
//     res: response,
//   });
// });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
