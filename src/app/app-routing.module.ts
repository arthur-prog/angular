import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheeseListComponent} from "./cheese-list/cheese-list.component";
import {CheeseNewComponent} from "./cheese-new/cheese-new.component";
import {HomeComponent} from "./home/home.component";
import {CheeseUpdateComponent} from "./cheese-update/cheese-update.component";

const routes: Routes = [
  {
    path: 'cheeses',
    component: CheeseListComponent
  },
  {
    path: 'new',
    component: CheeseNewComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'update/:id',
    component: CheeseUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
