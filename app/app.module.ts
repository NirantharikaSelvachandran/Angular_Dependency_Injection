import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyviewComponent } from './companyview/companyview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormGroup, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompanyviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
