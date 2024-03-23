import { Request, Response } from "express";
import { IInterationService } from "../../services/interfaces/IInterationService";
import CotationService from "../../services/cotationService";
import { InterationDTO } from "../../types/interation/InterationDTO";

export class CotationController {
  private readonly cotationService: IInterationService;
  constructor() {
    this.cotationService = new CotationService();
  }
  public async getCotationByDate(
    req: Request<InterationDTO>,
    res: Response<string>
  ) {
    const { msg } = req.body;
    const response = await this.cotationService.interation(msg);
    res.status(200).send(response);
  }
}
