import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private entrepriseService: EntrepriseService, private commentaireService: CommentaireService) { }

  getCommentairesParEntreprise(entreprise: Entreprise) {
    this.commentaireService.getCommentairesParEntreprise(entreprise)
      .subscribe(commentaires => {
        this.commentaires = commentaires;
        this.readyToDisplay = true;
        console.log(commentaires);
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

  ngOnInit() {
    this.storeEntrepriseCliquee();
    this.entreprise = JSON.parse(localStorage.getItem('entreprise'));
    this.getCommentairesParEntreprise(this.entreprise);
  }

  ngOnDestroy(){
    localStorage.clear();
  }

}
