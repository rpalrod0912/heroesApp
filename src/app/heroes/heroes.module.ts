import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { RouterModule } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeroPageComponent,
    ListsPageComponent,
    NewPageComponent,
    LayoutPageComponent,
    SearchPageComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule, RouterModule, MaterialModule],
})
export class HeroesModule {}
