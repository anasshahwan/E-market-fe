import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}
  apiUrl1: string = 'http://localhost:8080/api/v1.0/market/company/getall';

  apiUrl: string = 'http://localhost:8080/api/v1.0/market/company/info/';

  getAllCompanies() {
    return this.http.get(this.apiUrl1);
  }

  getCompanyByCompanyCode(company_code: string) {
    return this.http.get(this.apiUrl + company_code);
  }
}
