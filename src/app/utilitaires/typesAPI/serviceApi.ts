export class ServiceApi {
    public urlService: string;
    public nom: string;
    public representant: string;
    public description: string;
    public telephone: string;
    public email: string;
    public numRegistre: string;

    public services: string[];

    constructor(urlService: string, nom: string, representant: string, description: string, telephone: string, email: string, numRegistre: string, services: string[]) {
        this.urlService = urlService;
        this.nom = nom;
        this.representant = representant;
        this.description = description;
        this.telephone = telephone;
        this.email = email;
        this.services = services;
        this.numRegistre = numRegistre;
    }

}
