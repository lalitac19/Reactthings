import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';

@NgModule({
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];
  exports: [ RouterModule ]
})
export class AppRoutingModule {}