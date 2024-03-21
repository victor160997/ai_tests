import { Request, Response } from "express";
import { BcCotationsDTO } from "../../types/bc/BcCotationsDTO";
import { BcCotationByDateFilterDTO } from "../../types/bc/BcCotationByDateFilterDTO";
import { BcApi } from "../bcApi/BcApi";

export class CotationController {
  private readonly BcApi: BcApi;
  constructor() {
    this.BcApi = new BcApi();
  }
  public async getCotationByDate(
    req: Request<BcCotationByDateFilterDTO>,
    res: Response<BcCotationsDTO>
  ) {
    const { date } = req.body;
    const response = await this.BcApi.getCotationByDate(date);
    res.status(200).send(response);
  }
}
