export class Prenotazione {
    Nome:string;
    Cognome:string;
    Indirizzo:string;
    Telefono:string;
    Email:string;
    DataPrenotazione:string;
    OraPrenotazione:string;

    constructor (Nome:string, Cognome:string, Indirizzo:string, Telefono:string, Email:string, DataPrenotazione:string, OraPrenotazione:string){
        this.Nome=Nome;
        this.Cognome=Cognome;
        this.Indirizzo=Indirizzo;
        this.Telefono=Telefono;
        this.Email=Email;
        this.DataPrenotazione=DataPrenotazione;
        this.OraPrenotazione=OraPrenotazione;
    }
}