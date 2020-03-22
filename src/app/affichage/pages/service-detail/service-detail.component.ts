import { Component, OnInit } from '@angular/core';
import { ServiceApi } from '../../../utilitaires/typesAPI/serviceApi';
import { CommentairesApi } from '../../../utilitaires/typesAPI/commentaireApi';
import { ServiceApiService } from '../../../utilitaires/services/service-api.service';
import { CommentaireService } from '../../../utilitaires/services/commentaire.service';
import { ParamsCommentairesService } from 'src/app/utilitaires/services/params-commentaires.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  service: ServiceApi;
  commentaires: CommentairesApi[];
  commentairesFiltres: CommentairesApi[];

  readyToDisplay: boolean = false;
  yellowStarDisplayer: Array<number>;
  greyStarDisplayer: Array<number>;

  sourcesCommentaires: string[] = [];
  selectedSource: string;

  moyenneComm: number = 1;

  thumbLabel = true;
  noteValue: number;

  aFiltre: boolean = false;

  AFNOR_value: string = '';
  AFNOR_Model: string[] = ['Tous', 'AFNOR', 'Non AFNOR'];

  constructor(private servicesService: ServiceApiService, private commentaireService: CommentaireService, private paramsCommService: ParamsCommentairesService) { }

  getCommentaires(service: ServiceApi) {
    this.commentaireService.getCommentaires(null, service)
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

  updateAFNOR() {
    console.log("update AFNOR: " + this.AFNOR_value);
    switch (this.AFNOR_value) {
      case "AFNOR":
        console.log("AFNOR: " + this.AFNOR_value);
        this.commentairesFiltres = this.commentaires.filter(commentaire => commentaire.respecteAfnor);
      case "Non AFNOR":
        console.log("NonAFNOR: " + this.AFNOR_value);
        this.commentairesFiltres = this.commentaires.filter(commentaire => !commentaire.respecteAfnor);
      case "Tous":
        console.log("TOus");
        this.commentairesFiltres = this.commentaires;
    }
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
    this.paramsCommService.storeDateMax(dateMax.target.value);
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
    console.log("AFNOR: " + this.AFNOR_value + ", date min: " + this.noteValue);
    this.getCommentaires(this.service);
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
    else {
      return 1;
    }

  }

  resetParamsComm() {
    this.paramsCommService.resetParams();
    this.noteValue = null;
    this.AFNOR_value = null;
    this.selectedSource = null;
    this.getCommentaires(this.service);
  }

  /*AFNOR_Change() {
    this.AFNOR = !this.AFNOR;
    console.log("AFNOR: " + this.AFNOR + ", NonAFNOR: " + this.NonAFNOR);
    this.commentairesFiltres = this.commentaires;
    if (this.AFNOR) {
      if (!this.NonAFNOR) {
        this.commentairesFiltres = this.commentaires.filter(
          commentaire => commentaire.respecteAfnor == true
        );
      }
    }
    else {
      if (this.NonAFNOR) {
        console.log(this.commentaires[0].respecteAfnor);
        this.commentairesFiltres = this.commentaires.filter(
          commentaire => commentaire.respecteAfnor == false
        );
      }
      else {
        console.log("AFNOR false, NonAFNOR false");
        this.commentairesFiltres = null;
      }
    }
  }

  NonAFNOR_Change() {
    this.NonAFNOR = !this.NonAFNOR;
    console.log("AFNOR: " + this.AFNOR + ", NonAFNOR: " + this.NonAFNOR)
    this.commentairesFiltres = this.commentaires;
    if (!this.NonAFNOR) {
      if (this.AFNOR) {
        this.commentairesFiltres = this.commentaires.filter(
          commentaire => commentaire.respecteAfnor == false
        );
      }
    }
    else {
      if (this.AFNOR) {
        this.commentairesFiltres = this.commentaires.filter(
          commentaire => commentaire.respecteAfnor == true
        );
      }
      else {
        this.commentairesFiltres = null;
      }
    }
  }*/

  ngOnInit() {
    this.service = this.servicesService.retrieveServiceClique();
    this.getCommentaires(this.service);
  }

}
