import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Entreprise } from './entreprise';
import { EntrepriseApi } from './entrepriseApi';
import { ParamsRechercheService } from './params-recherche.service';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient, private paramsService: ParamsRechercheService) { }

  private entreprisesUrl = 'https://api.r-pro-advisor.gq/Entreprise';  // URL to web api
  private entrepriseClique: EntrepriseApi;
  private siret: string;
  private ville: string;


  //retourne toutes les entreprises
  getEntreprises(): Observable<EntrepriseApi[]> {
    let params: string;
    params = this.paramsService.remplitParams();
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

  getEntreprisesParSiret(siret: string): Observable<EntrepriseApi[]> {
    return this.http.get<EntrepriseApi[]>(this.entreprisesUrl + siret)
      .pipe(
        catchError(this.handleError<EntrepriseApi[]>('getEntreprises'))
      );
  }

  getEntreprisesParVille(ville: string): Observable<EntrepriseApi[]> {
    return this.http.get<EntrepriseApi[]>(this.entreprisesUrl + '?Ville=' + ville.toUpperCase())
      .pipe(
        catchError(this.handleError<EntrepriseApi[]>('getEntreprises'))
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
  getEntreprisesContenantChain(chain: string): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.entreprisesUrl)
      .pipe(
        map(entreprises => this.filtreEntreprisesContenantChain(entreprises, chain)),
        catchError(this.handleError<Entreprise[]>(`getEntreprisesParCategories, categorie:${chain}`, []))
      )
  }

  //méthode générique utilisée pour retourner les entreprises peu importe les filtres de catégorie et sur la barre de recherche
  getEntreprisesGenerique(inputValue?: string, categorieName?: string): Observable<Entreprise[]> {
    if (this.isStringValide(categorieName)) {
      return this.getEntreprisesParCategories(categorieName);
    }
    else { //if (this.isStringValide(inputValue)) 
      return this.getEntreprisesContenantChain(inputValue);
    }
    //else {
    //  return this.getEntreprises();
    //}
  }

  storeEntrepriseClique(entreprise: EntrepriseApi) {
    this.entrepriseClique = entreprise;
  }

  retrieveEntrepriseClique(): EntrepriseApi {
    return this.entrepriseClique;
  }


  /*
  *  ci-dessous: méthodes utilisaires employées dans les get au-dessus
  */

  filtreEntreprisesContenantChain(entreprises: Entreprise[], chain: string) {
    return entreprises.filter(entreprise => this.entrepriseContientChain(entreprise, chain));
  }

  /* 
  *  une méthode générique qui loop sur les propriétés d'entreprise et qui regarde si le type de la propriété est string, si la propriété
  *  contient la chaîne testée serait bien, mais je ne sais pas comment faire dans le cas où la propriété est aussi un objet qui a une autre 
  *  propriété qui est un string (comme catégorie)
  */
  entrepriseContientChain(entreprise: Entreprise, chain: string): boolean {
    let chain2 = chain.toLowerCase().trim();
    let contient: boolean = false;
    if (entreprise.nom.toLowerCase().trim().includes(chain2)) {
      contient = true;
    }
    entreprise.categories.forEach(
      categorie => {
        if (categorie.name.toLowerCase().trim() == chain2) contient = true;
      }
    )
    return contient;
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
