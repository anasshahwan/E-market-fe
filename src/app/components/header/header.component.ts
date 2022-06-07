import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/CompanyService/company.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private companyService: CompanyService,
    private dataService: DataService
  ) {}

  companies: any;
  ngOnInit(): void {
    const result = this.companyService
      .getAllCompanies()
      .subscribe((data: any) => {
        console.log('All companies', data);
        this.companies = data.companies;
      });
  }

  selectCompany(company_selected: any) {
    console.log(company_selected.value);
    this.dataService.changeMessage(company_selected.value);
  }
}
