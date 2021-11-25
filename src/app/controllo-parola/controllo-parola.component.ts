import {
  Directive,
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  Output,
  EventEmitter,
  AfterContentInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-controllo-parola',
  templateUrl: './controllo-parola.component.html',
  styleUrls: ['./controllo-parola.component.css'],
})
export class ControlloParolaComponent implements OnInit {
  vocabolario = [
    'tavolo',
    'panchina',
    'cuffie',
    'treno',
    'cena',
    'computer',
    'macchina',
  ];

  parolaUtente: string;
  parolaRandom: string;
  arrayLettere: string[];
  contatore = 0;
  errori = 0;
  vittoria = 0;
  @Input() letteraScelta: string;
  @Output() numeroErrori = new EventEmitter();

  onInvioErrori(errori) {
    this.numeroErrori.emit(errori);
  }

  onScegliParola() {
    this.parolaRandom =
      this.vocabolario[Math.floor(Math.random() * this.vocabolario.length)];
    this.parolaUtente =
      this.parolaRandom[0] +
      '-'.repeat(this.parolaRandom.length - 2) +
      this.parolaRandom[this.parolaRandom.length - 1];
    this.errori = 0;
  }

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.arrayLettere = Array.from(this.parolaRandom);
    this.numeroErrori.emit(this.errori);
  }

  ngOnChanges() {
    this.contatore = 0;

    for (let i = 1; i < this.parolaRandom.length - 1; i++) {
      if (this.letteraScelta === this.parolaRandom[i]) {
        this.parolaUtente =
          this.parolaUtente.substring(0, i) +
          this.letteraScelta +
          this.parolaUtente.substring(i + 1, this.parolaRandom.length);
      } else this.contatore++;
    }

    this.vittoria = 0;

    for (let i = 1; i < this.parolaRandom.length - 1; i++) {
      if (this.parolaUtente[i] != '-') {
        this.vittoria++;
        if (this.vittoria == this.parolaRandom.length - 2) {
          this.errori = -1;
        }
      }
    }

    if (this.contatore == this.parolaRandom.length - 2) {
      this.errori++;
    }

    if (this.errori == 6) {
      for (let i = 0; i < this.arrayLettere.length; i++) {
        if (this.arrayLettere[i] === this.parolaRandom[i]) {
          this.parolaUtente =
            this.parolaUtente.substring(0, i) +
            this.arrayLettere[i] +
            this.parolaUtente.substring(i + 1, this.parolaRandom.length);
        }
      }
    }
  }
}
