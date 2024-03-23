import express from "express";
import { CotationController } from "../controllers/cotationsController";

class CotationRouter {
  private router: express.Router;
  private cotationController: CotationController;

  constructor() {
    this.router = express.Router();
    this.cotationController = new CotationController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      "/",
      this.cotationController.getCotationByDate.bind(this.cotationController)
    );
  }

  getRouter() {
    return this.router;
  }
}

export default CotationRouter;
