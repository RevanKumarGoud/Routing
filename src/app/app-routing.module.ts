import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {PangeNotFoundComponent} from  './pange-not-found/pange-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
  {path:'', redirectTo:'/departments', pathMatch:'full'},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'departments/:id', component:DepartmentDetailsComponent },
  {path: 'employee', component: EmployeeListComponent},
  {path: "**", component: PangeNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentListComponent,EmployeeListComponent,PangeNotFoundComponent,DepartmentDetailsComponent]
