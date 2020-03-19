import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsRechercheService {

  private siret: number;
  private siren: number;
  private ville: string;
  private url: string;
  private zone: string;
  private gratuit: boolean;
  private service: string;
  private nbCommMin: number;

  storeSiret(siret: number) {
    this.siret = siret;
  }

  retrieveSiret() {
    return this.siret;
  }

  storeUrl(url: string) {
    this.url = url;
  }

  retrieveUrl() {
    return this.url;
  }

  storeVille(ville: string) {
    this.ville = ville;
  }

  retrieveVille() {
    return this.ville;
  }

  /*storeSiren(siren: number) {
    this.siren = siren;
  }

  retrieveSiren() {
    return this.siren;
  }*/

  storeZone(zone: string) {
    this.zone = zone;
  }

  retrieveZone() {
    return this.zone;
  }

  storeGratuit(gratuit: boolean) {
    this.gratuit = gratuit;
  }

  retrieveGratuit() {
    return this.gratuit;
  }

  storeService(service: string) {
    this.service = service;
  }

  retrieveService() {
    return this.service;
  }

  storeNbCommMin(nbCommMin: number) {
    this.nbCommMin = nbCommMin;
  }

  retrieveNbCommMin() {
    return this.nbCommMin;
  }

  remplitParamsEntreprise(): string {
    let params: string = '';
    let nbParams = 0;
    if (this.ville != null && this.ville != undefined && this.ville != "") {
      params += "?Ville=" + this.ville;
      nbParams++;
    }
    if (this.zone != null && this.zone != undefined && this.zone != "") {
      nbParams == 0 ? params += "?" : params += "&";
      params += "Zone=" + this.zone;
      nbParams++;
    }
    if (this.service != null && this.service != undefined && this.zone != "") {
      nbParams == 0 ? params += "?" : params += "&";
      params += "Service=" + this.service;
      nbParams++;
    }
    if (this.gratuit == true ) {
      nbParams == 0 ? params += "?" : params += "&";
      params += "Gratuit=" + this.gratuit;
      nbParams++;
    }
    if (this.nbCommMin != null && this.nbCommMin != undefined) {
      nbParams == 0 ? params += "?" : params += "&";
      params += "NbCommMin=" + this.nbCommMin;
      nbParams++;
    }
    return params;
  }

  remplitParamsService(): string{
    let params: string = '';
    let nbParams = 0;
    if (this.service != null && this.service != undefined && this.zone != "") {
      params += "?Service=" + this.service;
      nbParams++;
    }
    if (this.gratuit == true ) {
      nbParams == 0 ? params += "?" : params += "&";
      params += "Gratuit=" + this.gratuit;
      nbParams++;
    }
    if (this.nbCommMin != null && this.nbCommMin != undefined) {
      nbParams == 0 ? params += "?" : params += "&";
      params += "NbCommMin=" + this.nbCommMin;
      nbParams++;
    }
    return params;
  }

  resetParams() {
    this.siren = null;
    this.siret = null;
    this.ville = null;
    this.url = null;
    this.zone = null;
    this.service = null;
  }

  constructor() { }
}
