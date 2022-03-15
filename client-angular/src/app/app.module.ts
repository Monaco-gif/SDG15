import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ForestComponent } from './forest/forest.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { RedListComponent } from './red-list/red-list.component';
import { TerrestrialComponent } from './terrestrial/terrestrial.component';
import { AlienSpeciesComponent } from './alien-species/alien-species.component';
import { BiodiversityComponent } from './biodiversity/biodiversity.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ForestComponent,
    RedListComponent,
    TerrestrialComponent,
    AlienSpeciesComponent,
    BiodiversityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleChartsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
