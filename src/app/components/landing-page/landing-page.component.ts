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
    // this.getCompanyDetailsBycode(this.selectedCompany);
  }

  getCompanyDetailsBycode(company_code: string) {
    const res = this.companyService
      .getCompanyByCompanyCode(company_code)
      .subscribe((data: any) => {
        this.companyDetails = data.company_details[0];
        this.stock_prices = data.stock_prices[0].result;
        //  console.log(this.companyDetails);

        console.log(this.stock_prices);
      });
    // console.log(res);
  }

  calculateAvg() {
    //x console.log(this.stock_prices.stock_price);
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
