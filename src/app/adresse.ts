export class Adresse {
    ville: string;
    departement?: string;
    codePostal?: number;
    pays?: string;
    codePays?: number;

    constructor(ville: string, departement?: string, codePostal?: number, pays?: string, codePays?: number) {
        this.ville = ville;
        this.departement = departement;
        this.codePostal = codePostal;
        this.pays = pays;
        this.codePays = codePays;
    }
}