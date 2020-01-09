import { Component, OnInit, Input } from '@angular/core';
import { CommentaireService } from '../commentaire.service';
import { Commentaire } from '../commentaire';

@Component({
  selector: 'app-etoile-pourcentage',
  templateUrl: './etoile-pourcentage.component.html',
  styleUrls: ['./etoile-pourcentage.component.scss']
})
export class EtoilePourcentageComponent implements OnInit {

  constructor(private commentaireService: CommentaireService) { }

  oneStarTab: Array<number>;
  twoStarsTab: Array<number>;
  threeStarsTab: Array<number>;
  fourStarsTab: Array<number>;
  fiveStarsTab: Array<number>;
  @Input() commentaires: Commentaire[];

  pourcentCommentairesNote(commentaires: Commentaire[], note: number): number {
    let nbNotesCorrespondantes: number = 0;
    commentaires.forEach(
      commentaire => {
        if (Math.round(commentaire.note) == note) {
          nbNotesCorrespondantes++;
        }
      }
    )
    return Math.round((nbNotesCorrespondantes*100)/commentaires.length);
  }

  commentairesValides(commentaires: Commentaire[]): boolean{
    console.log(commentaires)
    return commentaires != null && commentaires != undefined && commentaires.length > 0;
  }

  ngOnInit() {
    this.oneStarTab = new Array<number>(1);
    this.twoStarsTab = new Array<number>(2);
    this.threeStarsTab = new Array<number>(3);
    this.fourStarsTab = new Array<number>(4);
    this.fiveStarsTab = new Array<number>(5);
  }

}
