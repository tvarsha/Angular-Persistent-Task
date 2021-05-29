import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { Table2Component } from './table2/table2.component';


const routes: Routes = [
  {path:"",component:LandingpageComponent},
  {path:"table2",component:Table2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
