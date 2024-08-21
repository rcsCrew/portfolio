import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosComponent } from './pages/inicios/inicios.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: IniciosComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
