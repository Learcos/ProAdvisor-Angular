import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { EntrepriseViewTemplateComponent } from '../entreprise-view-template/entreprise-view-template.component';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  animations: [
    trigger('hideShowAnime', [
      state('hide', style({ height: '0%', visibility: 'hidden' })),
      state('show', style({ height: '40%' })),
      transition('show => hide', animate('200ms')),
      transition('hide => show', animate('200ms'))
    ])
  ]
})

export class SearchResultsComponent implements OnInit {

  constructor(private entrepriseService: EntrepriseService, private route: ActivatedRoute) { }

  categorieClicked: string;
  inputValue: string;
  entreprises: Entreprise[];
  entreprisesBis: Entreprise[];
  topEntreprises: Entreprise[];


  getEntreprisesGenerique(inputValue?: string, categorie?: string): void {
    this.entrepriseService.getEntreprisesGenerique(inputValue, categorie)
      .subscribe(entreprises => {
        this.entreprises = entreprises;
        this.entreprisesBis = entreprises;
        this.topEntreprises = this.retourneTopEntreprises(this.entreprisesBis);
      });
  }

  entreprisesValides(entreprises: Entreprise[]) {
    return entreprises != undefined && entreprises != null && entreprises != [];
  }


  storeEntreprise(entreprise: Entreprise) {
    this.entrepriseService.storeEntrepriseClique(entreprise);
  }


  retourneTopEntreprises(entreprises: Entreprise[]) {
    if (entreprises.length == 1) return entreprises;
    else {
      return entreprises.sort(function (a, b) {
        return b.note - a.note;
      })
    }
  }


  //les entreprises sont récupérées juste après la création du composant avec ngOnInit()
  ngOnInit() {
    this.inputValue = this.route.snapshot.paramMap.get("name");
    this.categorieClicked = this.route.snapshot.paramMap.get("categorie");
    this.getEntreprisesGenerique(this.inputValue, this.categorieClicked);
  }

  //en-dessous: pour l'animation de la carte
  hideShow: string = 'show';

  hideAndShow(): void {
    this.hideShow = (this.hideShow === 'show') ? 'hide' : 'show';
  }
}
