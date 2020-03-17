import { Component, OnInit, Input } from '@angular/core';
import { EntrepriseService } from '../../../utilitaires/services/entreprise.service'
import { EntrepriseApi } from '../../../utilitaires/typesAPI/entrepriseApi';

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
