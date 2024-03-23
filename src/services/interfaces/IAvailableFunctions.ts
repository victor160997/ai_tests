import { BcCotationsDTO } from "../../types/bc/BcCotationsDTO";

export interface IAvailableFunctions {
  get_cotation_by_date: (date: string) => Promise<BcCotationsDTO>;
  get_cotation_by_period: (
    startDate: string,
    endDate: string
  ) => Promise<BcCotationsDTO>;
}
