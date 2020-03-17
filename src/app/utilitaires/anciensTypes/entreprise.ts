import { Categorie } from './categorie';
import { Adresse } from './adresse';

export class Entreprise {
    id: number;
    nom: string;
    categories: Categorie[];
    note: number;
    adresse: Adresse;
    lat: number;
    lng: number;
    description?: string;
    logo?: string;
    type?: string;

    constructor(id: number, nom: string, note: number, categories: Categorie[], adresse: Adresse, description?: string, logo?: string, type?: string) {
        this.id = id;
        this.nom = nom;
        this.note = note;
        this.categories = categories;
        this.adresse = adresse;
        this.description = description ? description : 'Je suis une bien belle entreprise'
        this.logo = logo ? logo : './assets/logo-entreprise.png';
        this.type = type ? type : 'entreprise'
    }
}
