import { AdminLayoutComponent } from './admin-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsModule } from './patients/patients.module';

const routes: Routes = [
       { path: '',
        component: AdminLayoutComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            {path: 'patients', loadChildren:()=>import('./patients/patients.module').then(m=>m.PatientsModule)}
          ]
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
