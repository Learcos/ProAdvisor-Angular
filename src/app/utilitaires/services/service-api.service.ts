import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceApi } from '../typesAPI/serviceApi';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  private servicesUrl = 'https://api.r-pro-advisor.gq/Service/';  // URL to web api
  private serviceClique: ServiceApi;

  constructor(private http: HttpClient) { }

  getServices(): Observable<ServiceApi[]> {
    return this.http.get<ServiceApi[]>(this.servicesUrl)
      .pipe(
        catchError(this.handleError<ServiceApi[]>('getServices'))
      );
  }

  getServiceByURL(urlService: string): Observable<ServiceApi> {
    console.log(this.servicesUrl + urlService);
    return this.http.get<ServiceApi>(this.servicesUrl + urlService)
      .pipe(
        catchError(this.handleError<ServiceApi>('getServiceByURL'))
      );
  }

  storeServiceClique(service: ServiceApi) {
    localStorage.setItem('service', JSON.stringify(service));
    this.serviceClique = service;
    console.log("store service clique: " + this.serviceClique.urlService);
  }

  retrieveServiceClique(): ServiceApi {
    console.log("retrieve service clique");
    return JSON.parse(localStorage.getItem('service'));
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
