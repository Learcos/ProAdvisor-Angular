import { Categorie } from './categorie';
import { Adresse } from './adresse';

export class Entreprise {
    id: number;
    nom: string;
    categories: Categorie[];
    note: number;
    description?: string;
    adresse?: Adresse;
    logo?: string;

    constructor(id: number, nom: string, note: number, categories: Categorie[], description?: string, adresse?: Adresse, logo?: string) {
        this.id = id;
        this.nom = nom;
        this.note = note;
        this.categories = categories;
        this.description = description;
        this.adresse = adresse;
        this.logo = logo? logo : './assets/logo-entreprise.png'
    }
}