import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsCommentairesService {

  private source: string;
  private AFNOR: boolean;
  private note: number;
  private dateMin: string;  /* format jj/mm/aaaa */
  private dateMax: string;

  storeSource(source: string) {
    this.source = source;
  }

  retrieveSource() {
    return this.source;
  }

  storeAFNOR(AFNOR: boolean) {
    this.AFNOR = AFNOR;
  }

  retrieveAFNOR() {
    return this.AFNOR;
  }

  storeNote(note: number) {
    this.note = note;
  }

  retrieveNote() {
    return this.note;
  }

  storeDateMin(dateMin: string) {
    this.dateMin = dateMin;
  }

  retrieveDateMin() {
    return this.dateMin;
  }

  storeDateMax(dateMax: string) {
    this.dateMax = dateMax;
  }

  retrieveDateMax() {
    return this.dateMax;
  }

  remplitParamsCommentaire(): string {
    let params: string = '';
    let nbParams = 0;
    if (this.source != null && this.source != undefined && this.source != "") {
      params += "?Source=" + this.source;
      nbParams++;
    }
    if (this.AFNOR != null && this.AFNOR != undefined) {
      nbParams == 0 ? params += "?" : params += "&";
      params += "AFNOR=" + this.AFNOR;
      nbParams++;
    }
    if (this.note != null && this.note != undefined) {
      nbParams == 0 ? params += "?" : params += "&";
      params += "Note=" + this.note;
      nbParams++;
    }
    if (this.dateMin != null && this.dateMin != undefined && this.dateMin != "") {
      nbParams == 0 ? params += "?" : params += "&";
      params += "DateMin=" + this.dateMin;
      nbParams++;
    }
    if (this.dateMax != null && this.dateMax != undefined && this.dateMax != "") {
      nbParams == 0 ? params += "?" : params += "&";
      params += "DateMax=" + this.dateMax;
      nbParams++;
    }
    console.log("params: " + params);
    return params;
  }

  resetParams() {
    this.source = null;
    this.note = null;
    this.dateMax = null;
    this.dateMin = null;
    this.AFNOR = null;
  }

  constructor() { }
}
