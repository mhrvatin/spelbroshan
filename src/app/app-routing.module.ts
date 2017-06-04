import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { GamesComponent }   from './games/games.component';
import { RulesComponent }   from './rules/rules.component';
import { RulesDetailsComponent }   from './rules-details/rules-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'games',  component: GamesComponent },
  { path: 'rules',  component: RulesComponent },
  { path: 'detail/:id', component: RulesDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
