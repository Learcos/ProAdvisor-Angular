import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
import { ParamsRechercheService } from '../params-recherche.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
  gratuit: boolean = false;

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(private paramsService: ParamsRechercheService, private fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
   }

  updateValue(value: string) {
    this.inputValue = value.trim();
  }

  storeVille(ville: any) {
    this.paramsService.storeVille(ville.target.value);
  }

  storeSiren(siren: any) {
    this.paramsService.storeSiren(siren.target.value);
  }

  storeSiret(siret: any) {
    this.paramsService.storeSiret(siret.target.value);
    this.siret = siret.target.value;
  }

  storeUrl(url: any) {
    this.paramsService.storeUrl(url.target.value);
    this.url = url.target.value;
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
