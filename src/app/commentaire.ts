
import { Entreprise } from './entreprise';
import { Auteur } from './auteur';

export class Commentaire{
    id: number;
    text: string;
    entreprise: Entreprise;
    note: number;
    date: Date;
    AFNOR?: boolean;
    auteur?: Auteur;
    datePrestation?: Date;
    dateModification?: Date;

    constructor(id: number, text: string, entreprise: Entreprise, note: number, date: Date, AFNOR?: boolean, auteur?: Auteur, datePrestation?: Date, dateModification?: Date){
        this.id = id;
        this.text = text;
        this.entreprise = entreprise;
        this.note = note;
        this.date = date;
        this.AFNOR = AFNOR;
        this.auteur = auteur;
        this.datePrestation = datePrestation;
        this.dateModification = dateModification;
    }
}