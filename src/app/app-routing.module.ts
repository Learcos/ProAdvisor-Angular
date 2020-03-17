import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAccueilComponent }   from './affichage/pages/page-accueil/page-accueil.component';
import { SearchResultsComponent } from './affichage/pages/search-results/search-results.component'
import { EntrepriseDetailComponent } from './affichage/pages/entreprise-detail/entreprise-detail.component';
import { ServiceDetailComponent } from './affichage/pages/service-detail/service-detail.component';


const routes: Routes = [
  { path: 'accueil', component: PageAccueilComponent },
  { path: 'entreprises', component: SearchResultsComponent},
  { path: 'entreprises/:siret', component: EntrepriseDetailComponent, data: {entreprise: 'entreprise'}},
  { path: 'services/:url', component: ServiceDetailComponent, data: {service: 'service'}},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
