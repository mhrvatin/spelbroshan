import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule, MdButtonModule, MdListModule, MdToolbarModule, MdGridListModule, MdIconModule, MdCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { RulesComponent } from './rules/rules.component';

import { AppRoutingModule } from './app-routing.module';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpModule,
    MdSidenavModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    MdGridListModule,
    MdIconModule,
    MdCardModule
  ],
  providers: [RuleService],
  bootstrap: [AppComponent]
})

export class AppModule { }