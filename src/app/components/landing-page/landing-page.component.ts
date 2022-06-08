import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/Services/CompanyService/company.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    private companyService: CompanyService,
    private dataService: DataService
  ) {}
  //TODO create a company model
  companyDetails: any;
  stock_prices: any;
  selectedCompany: string = '';

  minValue: number = 0;
  maxValue: number = 0;
  avgValue: number = 0;

  companies: any;
  ngOnInit(): void {
    this.getCompanySeleted();
  }

  getCompanyDetailsBycode(company_code: string) {
    const res = this.companyService
      .getCompanyByCompanyCode(company_code)
      .subscribe((data: any) => {
        this.companyDetails = data.company_details[0];
        this.stock_prices = data.stock_prices[0].result;
        this.calculator();
      });
  }

  calculator() {
    let prices = this.stock_prices.map((a: any) => a.stock_price);
    this.minValue = Math.min(...prices);
    this.maxValue = Math.max(...prices);
    this.avgValue = this.calcAvg(prices);
  }

  calcAvg(prices: any) {
    let sum = 0;
    for (var price of prices) {
      sum += price;
    }
    let average = sum / prices.length;
    return parseFloat(average.toFixed(2));
  }

  getAllCompanies() {
    const result = this.companyService.getAllCompanies().subscribe((data) => {
      console.log('All companies', data);
      this.companies = data;
    });
  }
  getCompanySeleted() {
    this.dataService.currentMsg.subscribe((data) => {
      this.selectedCompany = data;
      console.log('you can here here', this.selectedCompany);
      this.getCompanyDetailsBycode(data);
      console.log('HEllo');
    });
  }
}
