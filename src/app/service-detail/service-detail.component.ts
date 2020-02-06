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
  readyToDisplay: boolean = false;
  yellowStarDisplayer: Array<number>;
  greyStarDisplayer: Array<number>;

  constructor(private servicesService: ServiceApiService, private commentaireService: CommentaireService) { }

  getCommentaires(service: ServiceApi) {
    this.commentaireService.getCommentaires(null, service)
      .subscribe(commentaires => {
        this.commentaires = commentaires;
        this.readyToDisplay = true;
      })
  }

  commentairesValidesPourAffichage(commentaires: CommentairesApi[]){
    return commentaires != null && commentaires != undefined && commentaires.length > 0;
  }

  storeServiceClique(){
    if(!localStorage.getItem('service')){
      localStorage.setItem('service', JSON.stringify(this.servicesService.retrieveServiceClique()));
    }
  }

  isInteger(number: number): boolean{
    return Math.floor(number) == number;
  }

  ngOnInit() {
    this.storeServiceClique();
    this.service = JSON.parse(localStorage.getItem('service'));
    this.yellowStarDisplayer = new Array(Math.floor(4));
    this.greyStarDisplayer = new Array(Math.floor(1))
    this.getCommentaires(this.service);
  }

  ngOnDestroy(){
    localStorage.clear();
  }

}
