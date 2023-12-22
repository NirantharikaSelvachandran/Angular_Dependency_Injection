import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyviewComponent } from './companyview/companyview.component';

const routes: Routes = [
  {path:'', component:CompanyviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
