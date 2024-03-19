import express from "express";
import CompanyRouter from "./api/routes/company";
import InterationRouter from "./api/routes/interation";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Hello World",
  });
});

const companyRouter = new CompanyRouter();
const interationRouter = new InterationRouter();
app.use("/company", companyRouter.getRouter());
app.use("/interation", interationRouter.getRouter());

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
