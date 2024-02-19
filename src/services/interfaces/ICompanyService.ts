import { CompanyCreateDTO, CompanyDTO } from "../../types/company";

export interface ICompanyService {
  createCompany(company: CompanyCreateDTO): Promise<CompanyDTO>;
  listCompanies(): Promise<CompanyDTO[]>;
}
