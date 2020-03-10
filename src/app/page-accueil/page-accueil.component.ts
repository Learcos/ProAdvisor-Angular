import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
import { ParamsRechercheService } from '../params-recherche.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  title = "R-Pro-Advisor";
  inputValue: string = "lol";

  updateValue(value: string) {
    this.inputValue = value.trim();
  }

  categories: Categorie[] = [
    { id: 1, name: 'Peinture' },
    { id: 2, name: 'Architecte' },
    { id: 3, name: 'Chauffagiste' },
    { id: 4, name: 'Entrepreneur en toiture' },
    { id: 5, name: 'Menuisier' },
    { id: 6, name: 'Auto-moto' },
    { id: 7, name: 'Jardinage' },
    { id: 8, name: 'Panneaux solaires' },
    { id: 9, name: 'Isolation' },
    { id: 10, name: 'Aménagement intérieur' },
    { id: 11, name: 'Eolien' },
    { id: 12, name: 'Energie' }
  ];

  getCategories(): void {
    this.categorieService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  constructor(private categorieService: CategorieService, private paramsService: ParamsRechercheService) { }

  storeVille(ville: any){
    this.paramsService.storeVille(ville.target.value);
  }

  storeSiren(siren: any){
    this.paramsService.storeSiren(siren.target.value);
  }

  storeSiret(siret: any){
    this.paramsService.storeSiret(siret.target.value);
  }

  ngOnInit() {
  }

}
