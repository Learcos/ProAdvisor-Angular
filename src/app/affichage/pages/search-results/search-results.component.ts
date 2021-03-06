import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { EntrepriseService } from '../../../utilitaires/services/entreprise.service';
import { ActivatedRoute } from '@angular/router';
import { EntrepriseApi } from '../../../utilitaires/typesAPI/entrepriseApi';
import { ServiceApi } from '../../../utilitaires/typesAPI/serviceApi';
import { ServiceApiService } from '../../../utilitaires/services/service-api.service';
import { ParamsRechercheService } from '../../../utilitaires/services/params-recherche.service';

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

  constructor(private entrepriseService: EntrepriseService, private serviceService: ServiceApiService, private route: ActivatedRoute, private paramsService: ParamsRechercheService) { }

  categorieClicked: string;
  inputValue: string;
  ville: string;
  entreprises: EntrepriseApi[];
  entreprisesBis: EntrepriseApi[];
  topEntreprises: EntrepriseApi[];
  services: ServiceApi[];


  getEntreprises(): void {
    this.entrepriseService.getEntreprises()
      .subscribe(entreprises => {
        this.entreprises = entreprises;
      });
  }

  getServices(): void {
    this.serviceService.getServices()
      .subscribe(services => {
        this.services = services;
        this.services.forEach(service => {
          service.urlService = this.removeHTTP_URL(service.urlService);
        });
      });
  }

  tabValide(tab: any[]) {
    return tab !== undefined && tab != null && tab !== [];
  }

  countNumberOfResults() {
    let res = 0;
    if (this.entreprises) {
      res += this.entreprises.length;
    }
    if (this.services) {
      res += this.services.length;
    }
    return res;
  }

  stringValide(chaine: string): boolean {
    return chaine != null && chaine != undefined && chaine != "";
  }


  /*retourneTopEntreprises(entreprises: EntrepriseApi[]) {
    if (entreprises.length == 1) return entreprises;
    else {
      return entreprises.sort(function (a, b) {
        return b.note - a.note;
      })
    }
  }*/

  removeHTTP_URL(url: string): string{
    if(url.includes("/")){
      url = url.substring(url.lastIndexOf("/") +1);
    }
    return url;
  }


  // les entreprises sont récupérées juste après la création du composant avec ngOnInit()
  ngOnInit() {
    this.inputValue = this.route.snapshot.paramMap.get("name");
    console.log(this.inputValue);
    this.categorieClicked = this.route.snapshot.paramMap.get("categorie");
    this.getEntreprises();
    this.getServices();
    this.paramsService.resetParams();
  }

  // en-dessous: pour l'animation de la carte
  // hideShow: string = 'show';

}
