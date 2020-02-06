export class CommentairesApi {
    public note: number;
    public date: Date;
    public siret: string;
    public source: string;
    public auteur: string;
    public respecteAfnor: boolean;
    public commentaire: string;

    constructor(siret: string, source: string, note: number, auteur: string, respecteAfnor: boolean, commentaire: string, date: Date) {
        this.siret = siret;
        this.note = note;
        this.source = source;
        this.auteur = auteur;
        this.respecteAfnor = respecteAfnor;
        this.commentaire = commentaire;
        this.date = date;
    }

}
