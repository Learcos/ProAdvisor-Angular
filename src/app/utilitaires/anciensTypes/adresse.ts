export class Adresse {
    ville: string;
    lat: number;
    lng: number;
    departement?: string;
    codePostal?: number;
    pays?: string;
    codePays?: number;

    constructor(ville: string, lat: number, lng: number, departement?: string, codePostal?: number, pays?: string, codePays?: number) {
        this.ville = ville;
        this.lat = lat;
        this.lng = lng;
        this.departement = departement;
        this.codePostal = codePostal;
        this.pays = pays;
        this.codePays = codePays;
    }
}
