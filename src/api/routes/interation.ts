import express from "express";
import { InterationController } from "../controllers/interationController";
import InterationService from "../../services/interationService";

class InterationRouter {
  private router: express.Router;
  private interationController: InterationController;

  constructor() {
    this.router = express.Router();
    this.interationController = new InterationController(
      new InterationService()
    );
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      "/",
      this.interationController.interation.bind(this.interationController)
    );
  }

  getRouter() {
    return this.router;
  }
}

export default InterationRouter;
