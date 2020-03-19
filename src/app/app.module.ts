import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './affichage/pages/page-accueil/page-accueil.component';
import { SearchResultsComponent } from './affichage/pages/search-results/search-results.component';
import { SearchBarComponent } from './affichage/templates/search-bar/search-bar.component'
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntrepriseViewTemplateComponent } from './affichage/templates/entreprise-view-template/entreprise-view-template.component';
import { EntrepriseDetailComponent } from './affichage/pages/entreprise-detail/entreprise-detail.component';
import { CommentaireViewTemplateComponent } from './affichage/templates/commentaire-view-template/commentaire-view-template.component';
import { TopBarComponent } from './affichage/templates/top-bar/top-bar.component';
import { EtoilePourcentageComponent } from './affichage/templates/etoile-pourcentage/etoile-pourcentage.component';
import { MapComponent } from './affichage/map/map.component';
import { ServiceViewTemplateComponent } from './affichage/templates/service-view-template/service-view-template.component';
import { ServiceDetailComponent } from './affichage/pages/service-detail/service-detail.component';

import { MatInputModule, MatCheckboxModule, MatCardModule, MatRadioModule, MatSelectModule, } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAjoutComponent } from './affichage/pages/form-ajout/form-ajout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    SearchResultsComponent,
    EntrepriseViewTemplateComponent,
    EntrepriseDetailComponent,
    CommentaireViewTemplateComponent,
    TopBarComponent,
    EtoilePourcentageComponent,
    MapComponent,
    ServiceViewTemplateComponent,
    ServiceDetailComponent,
    FormAjoutComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSliderModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

