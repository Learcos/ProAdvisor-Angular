import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { EntrepriseApi } from '../entrepriseApi';

@Component({
  selector: 'app-entreprise-view-template',
  templateUrl: './entreprise-view-template.component.html',
  styleUrls: ['./entreprise-view-template.component.scss']
})
export class EntrepriseViewTemplateComponent implements OnInit {

  /*
  *  TODO: dégradé sur les étoiles lié aux décimaux de la note
  *        utiliser un *ngStyle plutôt que la méthode des tableaux
  */

  @Input() entreprise: EntrepriseApi;
  yellowStarDisplayer: Array<number>;
  greyStarDisplayer: Array<number>;

  isInteger(number: number): boolean{
    return Math.floor(number) == number;
  }

  constructor(private entrepriseService: EntrepriseService) { }

  storeEntreprise(entreprise: EntrepriseApi){
    this.entrepriseService.storeEntrepriseClique(entreprise);
  }

  ngOnInit() {
     /* 
     *  Pour boucler avec *ngFor dans le template (.html) sans avoir un objet sur lequel on peut boucler:
     *  déclarer un tableau "fake" qui ne contient rien, juste le nombre d'éléments nécessaires
     */
    this.yellowStarDisplayer = new Array(Math.floor(4));
    this.greyStarDisplayer = new Array(Math.floor(1))
  }

}
