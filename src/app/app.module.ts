import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    MessagesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
