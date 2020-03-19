import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../../../utilitaires/services/entreprise.service';
import { Commentaire } from '../../../utilitaires/anciensTypes/commentaire';
import { CommentaireService } from '../../../utilitaires/services/commentaire.service';
import { EntrepriseApi } from '../../../utilitaires/typesAPI/entrepriseApi';
import { CommentairesApi } from '../../../utilitaires/typesAPI/commentaireApi';

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
  AFNOR: boolean = true;
  NonAFNOR: boolean = true;

  constructor(private entrepriseService: EntrepriseService, private commentaireService: CommentaireService) { }

  getCommentaires(entreprise: EntrepriseApi) {
    this.commentaireService.getCommentaires(entreprise)
      .subscribe(commentaires => {
        this.commentaires = commentaires;
        this.readyToDisplay = true;
      })
  }

  commentairesValidesPourAffichage(commentaires: Commentaire[]) {
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
    this.entreprise = this.entrepriseService.retrieveEntrepriseClique();
    this.yellowStarDisplayer = new Array(Math.floor(4));
    this.greyStarDisplayer = new Array(Math.floor(1))
    this.getCommentaires(this.entreprise);
  }

}
