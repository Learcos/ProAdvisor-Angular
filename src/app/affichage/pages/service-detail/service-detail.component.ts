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
  AFNOR: boolean = true;
  NonAFNOR: boolean = true;

  constructor(private servicesService: ServiceApiService, private commentaireService: CommentaireService) { }

  getCommentaires(service: ServiceApi) {
    this.commentaireService.getCommentaires(null, service)
      .subscribe(commentaires => {
        this.commentaires = commentaires;
        this.readyToDisplay = true;
        this.commentairesFiltres = this.commentaires;
      })
  }

  commentairesValidesPourAffichage(commentaires: CommentairesApi[]) {
    return commentaires != null && commentaires != undefined && commentaires.length > 0;
  }

  isInteger(number: number): boolean {
    return Math.floor(number) == number;
  }

  AFNOR_Change() {
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
  }

  ngOnInit() {
    console.log("AFNOR: " + this.AFNOR + ", NonAFNOR: " + this.NonAFNOR)
    this.service = this.servicesService.retrieveServiceClique();
    this.yellowStarDisplayer = new Array(Math.floor(4));
    this.greyStarDisplayer = new Array(Math.floor(1))
    this.getCommentaires(this.service);
  }

}
