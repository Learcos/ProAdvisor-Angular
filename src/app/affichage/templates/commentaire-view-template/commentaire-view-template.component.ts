import { Component, OnInit, Input } from '@angular/core';
import { CommentairesApi } from 'src/app/utilitaires/typesAPI/commentaireApi';

@Component({
  selector: 'app-commentaire-view-template',
  templateUrl: './commentaire-view-template.component.html',
  styleUrls: ['./commentaire-view-template.component.scss']
})
export class CommentaireViewTemplateComponent implements OnInit {

  @Input() commentaire: CommentairesApi;

  yellowStarDisplayer: Array<number>;
  greyStarDisplayer: Array<number>;

  isInteger(number: number): boolean {
    return Math.floor(number) == number;
  }

  objectEstValide(object: Object) {
    return object != null && object != undefined;
  }

  constructor() { }

  ngOnInit() {
    this.yellowStarDisplayer = new Array(Math.floor(this.commentaire.note));
    this.greyStarDisplayer = new Array(Math.floor(5 - this.commentaire.note));
  }

}
