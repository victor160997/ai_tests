import CompanyService from "../../services/companyService";
import { Request, Response } from "express";
import { CompanyCreateDTO, CompanyDTO } from "../../types/company";
import { ErrorDTO } from "../../types/shared/error/ErrorDTO";

export class CompanyController {
  private readonly companyService: CompanyService;

  constructor() {
    this.companyService = new CompanyService();
  }

  async createCompany(
    req: Request<CompanyCreateDTO>,
    res: Response<CompanyDTO | ErrorDTO>
  ) {
    try {
      const data = await this.companyService.createCompany(req.body);

      res.status(201).send(data);
    } catch (error) {
      res.status(500).send({ error: "Error creating company" });
    }
  }

  async listCompanies(_req: Request, res: Response<CompanyDTO[] | ErrorDTO>) {
    try {
      const companies = await this.companyService.listCompanies();
      res.status(200).send(companies);
    } catch (error) {
      res.status(500).send({ error: "Error creating company" });
    }
  }
}
