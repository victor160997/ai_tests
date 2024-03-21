import { BcCotationsDTO } from "../../types/bc/BcCotationsDTO";

export interface IBcApi {
  getCotationByDate(date: string): Promise<BcCotationsDTO>;
  getCotationByPeriod(
    startDate: string,
    endDate: string
  ): Promise<BcCotationsDTO>;
}
