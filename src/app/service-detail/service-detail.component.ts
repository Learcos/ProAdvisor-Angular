import { Component, OnInit } from '@angular/core';
import { ServiceApi } from '../serviceApi';
import { CommentairesApi } from '../commentaireApi';
import { ServiceApiService } from '../service-api.service';
import { CommentaireService } from '../commentaire.service';

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
    console.log("AFNOR: " + this.AFNOR + ", NonAFNOR: " + this.NonAFNOR);
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

  storeServiceClique() {
    if (!localStorage.getItem('service')) {
      localStorage.setItem('service', JSON.stringify(this.servicesService.retrieveServiceClique()));
    }
  }

  isInteger(number: number): boolean {
    return Math.floor(number) == number;
  }

  filtreCommentairesAFNOROuNon(AFNOR: boolean) {

  }

  AFNOR_Change(event: any) {
    this.commentairesFiltres = this.commentaires;
    switch (event.target.value) {
      case true: if (this.NonAFNOR) {
        
      }
    }
  }

  changeCommentsAFNOR() {
    this.commentairesFiltres = this.commentaires.filter(
      commentaire => commentaire.respecteAfnor == this.AFNOR
    );
    if (this.NonAFNOR) {
      this.commentairesFiltres = this.commentaires.filter(
        commentaire => commentaire.respecteAfnor == this.NonAFNOR
      );
    }
  }

  changeCommentsNonAFNOR() {
    this.commentairesFiltres = this.commentaires.filter(
      commentaire => commentaire.respecteAfnor == this.NonAFNOR
    );
    if (!this.AFNOR) {
      this.commentairesFiltres = this.commentaires.filter(
        commentaire => commentaire.respecteAfnor == this.AFNOR
      );
    }
  }

  filtreCommentaires() {
    this.commentairesFiltres = this.commentaires;
    console.log("AFNOR: " + this.AFNOR + ", NonAFNOR: " + this.NonAFNOR);
    switch (this.AFNOR) {
      case true:
        if (!this.NonAFNOR) {
          this.commentairesFiltres = this.commentaires.filter(
            commentaire => commentaire.respecteAfnor == true
          );
        }
      case false:
        switch (this.NonAFNOR) {
          case true:
            this.commentairesFiltres = this.commentaires.filter(
              commentaire => commentaire.respecteAfnor == false
            );
          case false: this.commentairesFiltres = null;
        }
    }
  }

  ngOnInit() {
    this.storeServiceClique();
    this.service = JSON.parse(localStorage.getItem('service'));
    this.yellowStarDisplayer = new Array(Math.floor(4));
    this.greyStarDisplayer = new Array(Math.floor(1))
    this.getCommentaires(this.service);
  }

  ngOnDestroy() {
    localStorage.clear();
  }

}
