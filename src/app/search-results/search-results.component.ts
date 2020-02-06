import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { EntrepriseViewTemplateComponent } from '../entreprise-view-template/entreprise-view-template.component';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseApi } from '../entrepriseApi';
import { ServiceApi } from '../serviceApi';
import { ServiceApiService } from '../service-api.service';

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

  constructor(private entrepriseService: EntrepriseService, private serviceService: ServiceApiService, private route: ActivatedRoute) { }

  categorieClicked: string;
  inputValue: string;
  entreprises: EntrepriseApi[];
  entreprisesBis: EntrepriseApi[];
  topEntreprises: EntrepriseApi[];

  services: ServiceApi[];


  getEntreprises(): void {
    this.entrepriseService.getEntreprises()
      .subscribe(entreprises => {
        this.entreprises = entreprises;
        this.entreprisesBis = entreprises;
        //this.topEntreprises = this.retourneTopEntreprises(this.entreprisesBis);
      });
  }

  getServices(): void{
    this.serviceService.getServices()
      .subscribe(services => {
        this.services = services;
      });
  }

  tabValide(tab: any[]) {
    return tab !== undefined && tab != null && tab !== [];
  }

  countNumberOfResults(){
    let res = 0;
    if(this.entreprises){
      res += this.entreprises.length;
    }
    if(this.services){
      res += this.services.length;
    }
    return res;
  }


  /*retourneTopEntreprises(entreprises: EntrepriseApi[]) {
    if (entreprises.length == 1) return entreprises;
    else {
      return entreprises.sort(function (a, b) {
        return b.note - a.note;
      })
    }
  }*/


  // les entreprises sont récupérées juste après la création du composant avec ngOnInit()
  ngOnInit() {
    this.inputValue = this.route.snapshot.paramMap.get("name");
    this.categorieClicked = this.route.snapshot.paramMap.get("categorie");
    this.getEntreprises();
    this.getServices();
  }

  // en-dessous: pour l'animation de la carte
  // hideShow: string = 'show';

}
