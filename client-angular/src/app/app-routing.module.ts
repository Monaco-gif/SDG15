import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlienSpeciesComponent } from './alien-species/alien-species.component';
import { AppComponent } from './app.component';
import { BiodiversityComponent } from './biodiversity/biodiversity.component';
import { ForestComponent } from './forest/forest.component';
import { RedListComponent } from './red-list/red-list.component';
import { TerrestrialComponent } from './terrestrial/terrestrial.component';

const routes: Routes = [
  { path: 'alien-species', component: AlienSpeciesComponent},
  { path: 'biodiversity', component: BiodiversityComponent},
  { path: 'forest', component: ForestComponent},
  { path: 'red-list', component: RedListComponent},
  { path: 'terrestrial', component: TerrestrialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
