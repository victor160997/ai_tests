export interface BcCotationsDTO {
  value: CotationDTO[];
}

export interface CotationDTO {
  cotacaoCompra: number;
  cotacaoVenda: number;
  dataHoraCotacao: string;
}
