import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie/categorie.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntrepriseViewTemplateComponent } from './entreprise-view-template/entreprise-view-template.component';
import { EntrepriseDetailComponent } from './entreprise-detail/entreprise-detail.component';
import { CommentaireViewTemplateComponent } from './commentaire-view-template/commentaire-view-template.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EtoilePourcentageComponent } from './etoile-pourcentage/etoile-pourcentage.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    SearchBarComponent,
    PageAccueilComponent,
    SearchResultsComponent,
    EntrepriseViewTemplateComponent,
    EntrepriseDetailComponent,
    CommentaireViewTemplateComponent,
    TopBarComponent,
    EtoilePourcentageComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

