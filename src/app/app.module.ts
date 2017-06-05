import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { RulesComponent } from './rules/rules.component';

import { AppRoutingModule }     from './app-routing.module';
import { HttpModule} from "@angular/http";

import { RuleService } from './rules/rules.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    RulesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [RuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
