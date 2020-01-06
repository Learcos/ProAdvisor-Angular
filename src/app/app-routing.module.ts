import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAccueilComponent }   from './page-accueil/page-accueil.component';
import { SearchResultsComponent } from './search-results/search-results.component'
import { EntrepriseDetailComponent } from './entreprise-detail/entreprise-detail.component';


const routes: Routes = [
  { path: 'accueil', component: PageAccueilComponent },
  { path: 'entreprises', component: SearchResultsComponent},
  { path: 'entreprises/:nom', component: EntrepriseDetailComponent, data: {entreprise: 'entreprise'}},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
