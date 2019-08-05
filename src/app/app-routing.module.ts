import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { NamesListComponent } from './names-list/names-list.component';


const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'random', component: RandomNumberComponent},
  {path: 'names', component: NamesListComponent},
  {path: '**', redirectTo: '/first'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
