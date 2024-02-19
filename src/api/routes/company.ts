import express from "express";
import { CompanyController } from "../controllers/companyController";

export default class CompanyRouter {
  private router: express.Router;
  private empresaController: CompanyController;

  constructor() {
    this.router = express.Router();
    this.empresaController = new CompanyController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      "/",
      this.empresaController.createCompany.bind(this.empresaController)
    );

    this.router.get(
      "/",
      this.empresaController.listCompanies.bind(this.empresaController)
    );
    // Adicione mais rotas conforme necessário
  }

  getRouter() {
    return this.router;
  }
}
