import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../../../utilitaires/services/entreprise.service';
import { Commentaire } from '../../../utilitaires/anciensTypes/commentaire';
import { CommentaireService } from '../../../utilitaires/services/commentaire.service';
import { EntrepriseApi } from '../../../utilitaires/typesAPI/entrepriseApi';
import { CommentairesApi } from '../../../utilitaires/typesAPI/commentaireApi';
import { ParamsCommentairesService } from 'src/app/utilitaires/services/params-commentaires.service';

@Component({
  selector: 'app-entreprise-detail',
  templateUrl: './entreprise-detail.component.html',
  styleUrls: ['./entreprise-detail.component.scss']
})
export class EntrepriseDetailComponent implements OnInit {

  entreprise: EntrepriseApi;
  commentaires: CommentairesApi[];
  commentairesFiltres: CommentairesApi[];
  readyToDisplay: boolean = false;
  yellowStarDisplayer: Array<number>;
  greyStarDisplayer: Array<number>;

  sourcesCommentaires: string[] = [];
  selectedSource: string;

  moyenneComm: number = 1;

  thumbLabel = true;
  noteValue: number = 1;

  aFiltre: boolean = false;

  AFNOR_value: string = '';
  AFNOR_Model: string[] = ['Tous', 'AFNOR', 'Non AFNOR'];

  constructor(private entrepriseService: EntrepriseService, private commentaireService: CommentaireService, private paramsCommService: ParamsCommentairesService) { }

  getCommentaires(entreprise: EntrepriseApi) {
    this.commentaireService.getCommentaires(entreprise)
      .subscribe(commentaires => {
        this.commentaires = commentaires;
        this.readyToDisplay = true;
        this.commentairesFiltres = this.commentaires;
        this.remplitSources();
        this.moyenneComm = this.calculeMoyenneCommentaire();
        this.yellowStarDisplayer = new Array(this.moyenneComm);
        this.greyStarDisplayer = new Array(5 - this.moyenneComm);
      })
  }

  commentairesValides(commentaires: CommentairesApi[]) {
    return commentaires != null && commentaires != undefined && commentaires.length > 0;
  }

  isInteger(number: number): boolean {
    return Math.floor(number) == number;
  }

  remplitSources() {
    this.commentaires.forEach(commentaire => {
      if (commentaire.source != null && commentaire.source != undefined && commentaire.source != "") {
        let pasDansLeTableau: boolean = true;
        if (this.sourcesCommentaires.length > 0) {
          this.sourcesCommentaires.forEach(source => {
            if (commentaire.source = source) pasDansLeTableau = false;
          });
        }
        if (pasDansLeTableau) this.sourcesCommentaires.push(commentaire.source)
      }
    });
  }

  storeDateMin(dateMin: any) {
    this.paramsCommService.storeDateMin(dateMin.target.value);
  }

  storeDateMax(dateMax: any) {
    this.paramsCommService.storeDateMin(dateMax.target.value);
  }

  storeAFNOR() {
    let AFNOR: boolean = null;
    if (this.AFNOR_value == "AFNOR") {
      AFNOR = true;
    }
    if (this.AFNOR_value == "Non AFNOR") {
      AFNOR = false;
    }
    this.paramsCommService.storeAFNOR(AFNOR);
  }

  filtrerCommentaires() {
    this.storeAFNOR();
    this.paramsCommService.storeSource(this.selectedSource);
    this.paramsCommService.storeNote(this.noteValue);
    this.paramsCommService.remplitParamsCommentaire();
    console.log("AFNOR: " + this.AFNOR_value + ", note: " + this.noteValue);
    this.getCommentaires(this.entreprise);
    this.aFiltre = true;
  }

  calculeMoyenneCommentaire() {
    let moyenne: number = 0;
    let nbComm = 0;
    if (this.commentairesValides(this.commentaires)) {
      this.commentaires.forEach(commentaire => {
        moyenne += commentaire.note;
        nbComm++;
      })
      return Math.round(moyenne / nbComm);
    }
    else{
      return 1;
    }
    
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.retrieveEntrepriseClique();
    this.getCommentaires(this.entreprise);
  }

}
