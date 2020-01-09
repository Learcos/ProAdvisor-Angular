import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { Commentaire } from '../commentaire';
import { CommentaireService } from '../commentaire.service';

@Component({
  selector: 'app-entreprise-detail',
  templateUrl: './entreprise-detail.component.html',
  styleUrls: ['./entreprise-detail.component.scss']
})
export class EntrepriseDetailComponent implements OnInit {

  entreprise: Entreprise;
  commentaires: Commentaire[];
  readyToDisplay: boolean = false;
  yellowStarDisplayer: Array<number>;
  greyStarDisplayer: Array<number>;

  constructor(private entrepriseService: EntrepriseService, private commentaireService: CommentaireService) { }

  getCommentairesParEntreprise(entreprise: Entreprise) {
    this.commentaireService.getCommentairesParEntreprise(entreprise)
      .subscribe(commentaires => {
        this.commentaires = commentaires;
        this.readyToDisplay = true;
      })
  }

  commentairesValidesPourAffichage(commentaires: Commentaire[]){
    return commentaires != null && commentaires != undefined && commentaires.length > 0;
  }

  storeEntrepriseCliquee(){
    if(!localStorage.getItem('entreprise')){
      localStorage.setItem('entreprise', JSON.stringify(this.entrepriseService.retrieveEntrepriseClique()));
    }
  }

  isInteger(number: number): boolean{
    return Math.floor(number) == number;
  }

  ngOnInit() {
    this.storeEntrepriseCliquee();
    this.entreprise = JSON.parse(localStorage.getItem('entreprise'));
    this.yellowStarDisplayer = new Array(Math.floor(this.entreprise.note));
    this.greyStarDisplayer = new Array(Math.floor(5 - this.entreprise.note))
    this.getCommentairesParEntreprise(this.entreprise);
  }

  ngOnDestroy(){
    localStorage.clear();
  }

}
