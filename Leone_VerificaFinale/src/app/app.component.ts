import { Component } from '@angular/core';
import { Prenotazione } from './prenotazione.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leone_VerificaFinale';//PASSAGGIO 2
  data!: Prenotazione[];
  obs!: Observable <Prenotazione[]>;
  oo!:Observable <{id:number}>// PASSAGGIO 4 inserire nuove prenotazioni (solo questa riga)
  nuova!:Prenotazione;// PASSAGGIO 4 inserire nuove prenotazioni (solo questa riga)
  nascondi:boolean=false;// PASSAGGIO 5 (solo questa riga)
  ciclo!: Prenotazione;// PASSAGGIO 5 (solo questa riga)
  constructor(private http: HttpClient){
    this.obs=this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/AndreaLeone06/richiesta_http/booking');
    this.obs.subscribe(this.getdata);
  }
  getdata=(d:Prenotazione[])=>{this.data=d};//variabile x
  // PASSAGGIO 4 inserire nuove prenotazioni
  prenota(nome:HTMLInputElement, cognome:HTMLInputElement, indirizzo:HTMLInputElement, telefono:HTMLInputElement, email:HTMLInputElement, dataPren:HTMLInputElement, oraPren:HTMLInputElement):boolean{
    let postid = JSON.stringify({
      "Nome": nome.value,
      "Cognome": cognome.value,
      "Indirizzo": indirizzo.value,
      "Telefono": telefono.value,
      "Email": email.value,
      "DataPrenotazione": dataPren.value,
      "OraPrenotazione": oraPren.value
    })
    this.oo=this.http.post<{id:number}>('https://my-json-server.typicode.com/AndreaLeone06/richiesta_http/booking', postid);
    this.oo.subscribe(this.getdatapostid);
    this.nuova=new Prenotazione(nome.value, cognome.value, indirizzo.value, telefono.value, email.value, dataPren.value, oraPren.value)
    return false}
    getdatapostid=(p:{id:number})=>{
      if (p.id != undefined){this.data.push(this.nuova)}
    };
    // PASSAGGIO 5
    mostra(f:Prenotazione):boolean{
      this.nascondi=!this.nascondi;
      this.ciclo=f;
      return false}
}

