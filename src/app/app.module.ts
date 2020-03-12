import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntrepriseViewTemplateComponent } from './entreprise-view-template/entreprise-view-template.component';
import { EntrepriseDetailComponent } from './entreprise-detail/entreprise-detail.component';
import { CommentaireViewTemplateComponent } from './commentaire-view-template/commentaire-view-template.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EtoilePourcentageComponent } from './etoile-pourcentage/etoile-pourcentage.component';
import { MapComponent } from './map/map.component';
import { ServiceViewTemplateComponent } from './service-view-template/service-view-template.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

import { MatInputModule, MatCheckboxModule, MatCardModule, MatRadioModule, MatSelectModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAjoutComponent } from './form-ajout/form-ajout.component';
import {MatButtonModule} from '@angular/material/button';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

