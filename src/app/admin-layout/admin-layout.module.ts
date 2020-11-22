import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminLayoutComponent,DashboardComponent, NavbarComponent,SidebarComponent,FooterComponent, PatientListComponent, PatientDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
