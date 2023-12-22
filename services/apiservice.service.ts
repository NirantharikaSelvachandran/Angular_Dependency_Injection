import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { companies } from '../app/companymodel';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getCompany(){
    return this.http.get<companies[]>("https://testapi.devtoolsdaily.com/companies")
  }
}