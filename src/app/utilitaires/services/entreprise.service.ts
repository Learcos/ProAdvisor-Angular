import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EntrepriseApi } from '../typesAPI/entrepriseApi';
import { ParamsRechercheService } from './params-recherche.service';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient, private paramsService: ParamsRechercheService) { }

  private entreprisesUrl = 'https://api.r-pro-advisor.gq/Entreprise/';  // URL to web api
  private entrepriseClique: EntrepriseApi;

  //retourne toutes les entreprises
  getEntreprises(): Observable<EntrepriseApi[]> {
    let params: string;
    params = this.paramsService.remplitParamsEntreprise();
    if(params != null && params != undefined){
      console.log("params:", params);
      return this.http.get<EntrepriseApi[]>(this.entreprisesUrl + params)
      .pipe(
        catchError(this.handleError<EntrepriseApi[]>('getEntreprises'))
      );
    }
    else{
      return this.http.get<EntrepriseApi[]>(this.entreprisesUrl)
      .pipe(
        catchError(this.handleError<EntrepriseApi[]>('getEntreprises'))
      );
    }
    
  }

  getEntreprisesParSiret(siret: number): Observable<EntrepriseApi> {
    return this.http.get<EntrepriseApi>(this.entreprisesUrl + siret)
      .pipe(
        catchError(this.handleError<EntrepriseApi>('getEntreprises'))
      );
  }

  getEntreprisesParVille(ville: string): Observable<EntrepriseApi[]> {
    return this.http.get<EntrepriseApi[]>(this.entreprisesUrl + '?Ville=' + ville.toUpperCase())
      .pipe(
        catchError(this.handleError<EntrepriseApi[]>('getEntreprises'))
      );
  }

  storeEntrepriseClique(entreprise: EntrepriseApi) {
    this.entrepriseClique = entreprise;
    localStorage.setItem('entreprise', JSON.stringify(entreprise));
  }

  retrieveEntrepriseClique(): EntrepriseApi {
    return JSON.parse(localStorage.getItem('entreprise'));
  }

  isStringValide(chain: string): boolean {
    return chain != "" && chain != undefined && chain != null;
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
