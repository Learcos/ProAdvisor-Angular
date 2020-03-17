import { Adresse } from './adresse';

export class Auteur{

    id: number;
    dateInscription: Date;
    pseudo: string;
    adresse?: Adresse;
    avatar?: string;
    nombreCommentairesPostes?: number;

    constructor(id: number, dateInscription: Date, pseudo: string, adresse?: Adresse, avatar?: string, nombreCommentairesPostes?: number){
        this.id = id;
        this.dateInscription = dateInscription;
        this.pseudo = pseudo;
        this.adresse = adresse;
        this.avatar = avatar ? avatar : './assets/person-logo.jpg';
        this.nombreCommentairesPostes = nombreCommentairesPostes;
    }
}