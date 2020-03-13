import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { Commentaire } from '../commentaire';
import { CommentaireService } from '../commentaire.service';
import { EntrepriseApi } from '../entrepriseApi';
import { CommentairesApi } from '../commentaireApi';

@Component({
  selector: 'app-entreprise-detail',
  templateUrl: './entreprise-detail.component.html',
  styleUrls: ['./entreprise-detail.component.scss']
})
export class EntrepriseDetailComponent implements OnInit {

  entreprise: EntrepriseApi;
  commentaires: CommentairesApi[];
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

  storeEntrepriseCliquee() {
    if (!localStorage.getItem('entreprise')) {
      localStorage.setItem('entreprise', JSON.stringify(this.entrepriseService.retrieveEntrepriseClique()));
    }
  }

  isInteger(number: number): boolean {
    return Math.floor(number) == number;
  }

  filtreCommentairesAFNOROuNon(AFNOR: boolean) {
    this.commentaires.filter(
      commentaire => commentaire.respecteAfnor == AFNOR
    );
  }

  changeCommentsAFNOR(){
    this.filtreCommentairesAFNOROuNon(true);
  }

  changeCommentsNonAFNOR(){
    this.filtreCommentairesAFNOROuNon(false);
  }

  ngOnInit() {
    this.storeEntrepriseCliquee();
    this.entreprise = JSON.parse(localStorage.getItem('entreprise'));
    this.yellowStarDisplayer = new Array(Math.floor(4));
    this.greyStarDisplayer = new Array(Math.floor(1))
    this.getCommentaires(this.entreprise);
  }

  ngOnDestroy() {
    localStorage.clear();
  }

}
