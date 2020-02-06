import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Categorie } from './categorie';
import { catchError, map } from 'rxjs/operators';
import { Commentaire } from './commentaire';
import { Entreprise } from './entreprise';
import { EntrepriseApi } from './entrepriseApi';
import { ServiceApi } from './serviceApi';
import { CommentairesApi } from './commentaireApi';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) { }

  private servicesCommentairesUrl = 'https://api.r-pro-advisor.gq/Service';  // URL to web api
  private entreprisesCommentairesUrl = 'https://api.r-pro-advisor.gq/Entreprise';

  //Observable: utile quand les requêtes seront en HTML (asynchrones)
  getCommentaires(entreprise?: EntrepriseApi, service?: ServiceApi): Observable<CommentairesApi[]> {
    let url: string;
    if(entreprise !== null && entreprise !== undefined){
      url = this.entreprisesCommentairesUrl + '/' + entreprise.siret + '/Comments';
    }
    else if(service !== null && service !== undefined){
      url = this.servicesCommentairesUrl + '/' + service.urlService + '/Comments';
    }
    return this.http.get<CommentairesApi[]>(url)
      .pipe(
        catchError(this.handleError<CommentairesApi[]>('getCommentaires', []))
      );
  }

  /*
  getCommentairesParEntreprise(entreprise: Entreprise): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(this.commentairesUrl)
      .pipe(
        map(commentaires => this.filtreParEntreprise(commentaires, entreprise)),
        //catchError(this.handleError<Commentaire[]>('getCommentairesParEntreprise', []))
      );
  }

  filtreParEntreprise(commentaires: Commentaire[], entreprise: Entreprise): Commentaire[]{
    return commentaires.filter(commentaire => commentaire.entreprise.id == entreprise.id);
  }
  */

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      /* 
      *  TODO: better job of transforming error for user consumption
      *  MessageService pas fait pour l'instant (voir tuto Tour of Heroes)
      */
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
