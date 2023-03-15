import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormAppComponent} from "./form-app/form-app.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: FormAppComponent},
  {path: 'categories', component: FormAppComponent},

  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
