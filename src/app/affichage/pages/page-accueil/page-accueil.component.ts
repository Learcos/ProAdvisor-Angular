import { Component, OnInit } from '@angular/core';
import { ParamsRechercheService } from '../../../utilitaires/services/params-recherche.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EntrepriseService } from '../../../utilitaires/services/entreprise.service';
import { ServiceApiService } from '../../../utilitaires/services/service-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  title = "R-Pro-Advisor";
  inputValue: string = "lol";

  rechercheService = true;
  rechercheEntreprise = true;
  rechercheAvancee = true;

  siret: number;
  url: string;
  gratuit: boolean;

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(private paramsService: ParamsRechercheService, private fb: FormBuilder, private entrepriseService: EntrepriseService, private serviceService: ServiceApiService, private router: Router) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
   }

  updateValue(value: string) {
    this.inputValue = value.trim();
  }

  storeSiret(siret: any) {
    this.paramsService.storeSiret(siret.target.value);
    this.siret = siret.target.value;
  }

  storeUrl(url: any) {
    this.paramsService.storeUrl(url.target.value);
    this.url = url.target.value;
  }

  storeVille(ville: any) {
    this.paramsService.storeVille(ville.target.value);
  }

  store_Service(service: any) {
    this.paramsService.storeService(service.target.value);
  }
  
  updateGratuit(){
    this.gratuit = !this.gratuit;
  }

  storeGratuit(){
    this.paramsService.storeGratuit(this.gratuit);
  }

  storeZone(zone: any){
    this.paramsService.storeZone(zone.target.value);
  }

  storeNbCommMin(nb: any){
    this.paramsService.storeNbCommMin(nb.target.value);
  }

  /*storeSiren(siren: any) {
    this.paramsService.storeSiren(siren.target.value);
  }*/

  storeEntreprise(){
    this.entrepriseService.getEntreprisesParSiret(this.siret).subscribe(
      entreprise => {
        this.entrepriseService.storeEntrepriseClique(entreprise);
        this.router.navigateByUrl("/entreprises/" + this.siret);
      }
    );
  }

  storeService(){
    this.serviceService.getServiceByURL(this.url).subscribe(
      service => {
        console.log(service.urlService);
        this.serviceService.storeServiceClique(service);
        this.router.navigateByUrl("/services/" + this.url);
      }
    );
  }

  majRechercheAvancee() {
    this.rechercheAvancee = true;
    this.rechercheEntreprise = false;
    this.rechercheService = false;
  }

  majRechercheEntreprise() {
    this.rechercheAvancee = false;
    this.rechercheEntreprise = true;
    this.rechercheService = false;
  }

  majRechercheService() {
    this.rechercheAvancee = false;
    this.rechercheEntreprise = false;
    this.rechercheService = true;
  }

  ngOnInit() {
  }

}
