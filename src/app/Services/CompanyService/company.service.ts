import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}
  apiUrl: string =
    'http://ec2-3-15-217-13.us-east-2.compute.amazonaws.com:8080/api/v1.0/market/company/';

  getAllCompanies() {
    return this.http.get(this.apiUrl + '/getall');
  }

  getCompanyByCompanyCode(company_code: string) {
    return this.http.get(this.apiUrl + '/info/' + company_code);
  }
}
