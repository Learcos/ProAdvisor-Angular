import { Component, OnInit } from '@angular/core';
import { ServiceApi } from '../../../utilitaires/typesAPI/serviceApi';
import { CommentairesApi } from '../../../utilitaires/typesAPI/commentaireApi';
import { ServiceApiService } from '../../../utilitaires/services/service-api.service';
import { CommentaireService } from '../../../utilitaires/services/commentaire.service';

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

  thumbLabel = true;
  noteValue: number = 1;

  AFNOR_value: string = '';
  AFNOR_Model: string[] = ['Tous', 'AFNOR', 'Non AFNOR'];

  constructor(private servicesService: ServiceApiService, private commentaireService: CommentaireService) { }

  getCommentaires(service: ServiceApi) {
    this.commentaireService.getCommentaires(null, service)
      .subscribe(commentaires => {
        this.commentaires = commentaires;
        this.readyToDisplay = true;
        this.commentairesFiltres = this.commentaires;
        this.remplitSources();
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
      if(commentaire.source != null && commentaire.source != undefined && commentaire.source != ""){
        let pasDansLeTableau: boolean = true;
        if(this.sourcesCommentaires.length > 0){
          this.sourcesCommentaires.forEach(source => {
            if(commentaire.source = source) pasDansLeTableau = false;
          });
        }
        if(pasDansLeTableau) this.sourcesCommentaires.push(commentaire.source)
      }
    });
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
    this.yellowStarDisplayer = new Array(Math.floor(4));
    this.greyStarDisplayer = new Array(Math.floor(1))
    this.getCommentaires(this.service);
  }

}
