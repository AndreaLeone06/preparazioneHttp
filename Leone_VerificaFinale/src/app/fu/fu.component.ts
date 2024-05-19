import { Component, Input } from '@angular/core';//importa Input
import { Prenotazione } from '../prenotazione.model';

@Component({
  selector: 'app-fu',
  templateUrl: './fu.component.html',
  styleUrls: ['./fu.component.css']
})
export class FuComponent {//PASSAGGIO 5 CREAIAMO QUESTO COMPONENTE E SCRIVIAMO:
  @Input() finale!: Prenotazione;
}
