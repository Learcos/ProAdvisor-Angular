import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Entreprise } from './entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }

  private entreprisesUrl = 'api/entreprises';  // URL to web api
  private entrepriseClique: Entreprise;

  //retourne toutes les entreprises
  getEntreprises(): Observable<Entreprise[]> {  
    return this.http.get<Entreprise[]>(this.entreprisesUrl)
      .pipe(
        catchError(this.handleError<Entreprise[]>('getEntreprises', []))
      );
  }

  //retourne les entreprises qui ont categorieName en nom de categorie
  //on utilise le nom de la catégorie car c'est un string que l'on peut retrouver en tant que paramètre dans une URL
  //voir ngOnInit() de search-results.component.ts
  getEntreprisesParCategories(categorieName: string): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.entreprisesUrl)
      .pipe(
        map(entreprises => this.filtreEntreprisesParCategorie(entreprises, categorieName)),
        catchError(this.handleError<Entreprise[]>(`getEntreprisesParCategories, categorie:${categorieName}`, []))
      )
  }

  //utilisé dans un 1er temps pour la barre de recherche d'entreprise
  getEntreprisesContenantChain(chain: string) {
    return this.http.get<Entreprise[]>(this.entreprisesUrl)
      .pipe(
        map(entreprises => this.filtreEntreprisesContenantChain(entreprises, chain)),
        catchError(this.handleError<Entreprise[]>(`getEntreprisesContenantChain, chain:${chain}`, []))
      )
  }

  //méthode générique utilisée pour retourner les entreprises peu importe les filtres de catégorie et sur la barre de recherche
  getEntreprisesGenerique(inputValue?: string, categorieName?: string): Observable<Entreprise[]> {
    if(this.isStringValide(inputValue)){
      return this.getEntreprisesContenantChain(inputValue);
    }
    else if(this.isStringValide(categorieName)){
      return this.getEntreprisesParCategories(categorieName);
    }
    else{
      return this.getEntreprises();
    }
  }

  storeEntrepriseClique(entreprise: Entreprise){
    this.entrepriseClique = entreprise;
  }

  retrieveEntrepriseClique(): Entreprise{
    return this.entrepriseClique;
  }


  /*
  *  ci-dessous: méthodes utilisaires employées dans les get au-dessus
  */

  //filtre les entreprises sur leur nom qui doit contenir chain
  filtreEntreprisesContenantChain(entreprises: Entreprise[], chain: string) {
    return entreprises.filter(entreprise => entreprise.nom.toLowerCase().trim().includes(chain.toLowerCase()));
  }

  filtreEntreprisesParCategorie(entreprises: Entreprise[], categorieName: string): Entreprise[] {
    return entreprises.filter(entreprise => this.entrepriseAppartientA_LaCategorie(entreprise, categorieName));
  }

  entrepriseAppartientA_LaCategorie(entreprise: Entreprise, categorieName: string): boolean {
    var appartient: boolean = false;
    var goOn: boolean = true;
    entreprise.categories.forEach(categ => {
      if (goOn) {
        if (categ.name == categorieName) {
          appartient = true;
          goOn = false;
        }
      }
    });
    return appartient;
  }

  isStringValide(chain: string): boolean{
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
