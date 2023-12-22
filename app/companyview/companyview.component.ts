import { Component } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { companies } from '../companymodel';

@Component({
  selector: 'app-companyview',
  templateUrl: './companyview.component.html',
  styleUrls: ['./companyview.component.css']
})
export class CompanyviewComponent {

  data: any | companies[];

  constructor(private api: ApiserviceService) {}

  ngOnInit(): void {
    this.displaycompanies();
  }

  displaycompanies() {
    this.api.getCompany().subscribe(res => {
      this.data = res;
    });
  }
}
