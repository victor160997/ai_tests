import axios from "axios";
import { BcCotationsDTO } from "../../types/bc/BcCotationsDTO";
import { IBcApi } from "./IBcApi";

export class BcApi implements IBcApi {
  private readonly baseUrl: string;
  constructor() {
    console.log("BcApi constructor");
    this.baseUrl =
      "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/";
    this.getCotationByDate = this.getCotationByDate.bind(this);
  }

  async getCotationByDate(date: string): Promise<BcCotationsDTO> {
    const url = `${this.baseUrl}CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${date}'&$top=100&$format=json`;
    const res = await axios.get(url);
    console.log(res);
    return res.data as BcCotationsDTO;
  }

  async getCotationByPeriod(
    startDate: string,
    endDate: string
  ): Promise<BcCotationsDTO> {
    const url = `${this.baseUrl}CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${startDate}'&@dataFinalCotacao='${endDate}'&$top=100&$format=json`;

    const res = await axios.get(url);
    return res.data as BcCotationsDTO;
  }
}
