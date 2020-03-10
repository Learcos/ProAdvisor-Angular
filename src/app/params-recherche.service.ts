import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsRechercheService {

  private siret: number;
  private siren: number;
  private ville: string;

  storeVille(ville: string) {
    this.ville = ville;
  }

  retrieveVille() {
    return this.ville;
  }

  storeSiren(siren: number) {
    this.siren = siren;
  }

  retrieveSiren() {
    return this.siren;
  }

  storeSiret(siret: number) {
    this.siret = siret;
  }

  retrieveSiret() {
    return this.siret;
  }

  remplitParams(): string {
    let params: string;
    if (this.ville != null && this.ville != undefined && this.ville != "") {
      console.log("ville: ", this.ville);
      params = "?Ville=" + this.ville;
    }
    return params;
  }

  resetParams(){
    this.siren = null;
    this.siret = null;
    this.ville = null;
  }

  constructor() { }
}
