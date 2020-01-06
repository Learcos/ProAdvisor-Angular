import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categorie } from './categorie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/*
*  Service qui récupère les catégories (pour donner à d'autres composants)
*/

export class CategorieService {

  constructor(private http: HttpClient, ) { }

  private categoriesUrl = 'api/categories';  // URL to web api

  //Observable: utile quand les requêtes seront en HTML (asynchrones)
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.categoriesUrl)
      .pipe(
        catchError(this.handleError<Categorie[]>('getCategories', []))
      );
  }

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
