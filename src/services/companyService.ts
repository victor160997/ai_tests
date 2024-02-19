import { PrismaClient } from "@prisma/client";
import { ICompanyService } from "./interfaces/ICompanyService";
import { CompanyCreateDTO, CompanyDTO } from "../types/company";

class CompanyService implements ICompanyService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createCompany(company: CompanyCreateDTO): Promise<CompanyDTO> {
    const companyCreated: CompanyDTO = await this.prisma.company.create({
      data: {
        name: company.name,
        phoneNumber: company.phoneNumber,
        website: company.website,
      },
    });

    return companyCreated;
  }

  async listCompanies(): Promise<CompanyDTO[]> {
    const companies: CompanyDTO[] = await this.prisma.company.findMany();

    return companies;
  }
}

export default CompanyService;
