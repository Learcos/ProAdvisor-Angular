import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceApi } from './serviceApi';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  private servicesUrl = 'https://api.r-pro-advisor.gq/Service';  // URL to web api
  private serviceClique: ServiceApi;

  constructor(private http: HttpClient) { }

  getServices(): Observable<ServiceApi[]> {
    return this.http.get<ServiceApi[]>(this.servicesUrl)
          .pipe(
        catchError(this.handleError<ServiceApi[]>('getEntreprises'))
      );
  }

  storeServiceClique(service: ServiceApi) {
    this.serviceClique = service;
    console.log("store service clique");
  }

  retrieveServiceClique(): ServiceApi {
    console.log("retrieve service clique");
    return this.serviceClique;
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
