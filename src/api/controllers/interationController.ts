import { Request, Response } from "express";
import { IInterationService } from "../../services/interfaces/IInterationService";
import { InterationDTO } from "../../types/interation/InterationDTO";

export class InterationController {
  private readonly interationService: IInterationService;

  constructor(interationService: IInterationService) {
    this.interationService = interationService;
  }

  async interation(req: Request<InterationDTO>, res: Response<string>) {
    const { msg } = req.body;
    const response = await this.interationService.interation(msg);
    res.status(200).send(response);
  }
}
