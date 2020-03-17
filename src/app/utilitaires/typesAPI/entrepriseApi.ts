export class EntrepriseApi {
    public siret: string;
    public siren: string;
    public nom: string;
    public representant: string;
    public description: string;
    public telephone: string;
    public email: string;
    public ville: string
    public adresse: string;
    public codePostal: string;

    public services: string[];
    public zonesIntervention: string[];

    constructor(siret: string, siren: string, nom: string, representant: string, description: string, telephone: string, email: string, ville: string, adresse: string, codePostal: string, services: string[], zonesIntervention: string[]) {
        this.siret = siret;
        this.siren = siren;
        this.nom = nom;
        this.representant = representant;
        this.description = description;
        this.telephone = telephone;
        this.email = email;
        this.ville = ville;
        this.adresse = adresse;
        this.codePostal = codePostal;
        this.services = services;
        this.zonesIntervention = zonesIntervention;
    }

}
