import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { lettera } from '../shared/lettera.model';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent implements OnInit {
  alfabeto: lettera[] = [
    new lettera('q', true),
    new lettera('w', true),
    new lettera('e', true),
    new lettera('r', true),
    new lettera('t', true),
    new lettera('y', true),
    new lettera('u', true),
    new lettera('i', true),
    new lettera('o', true),
    new lettera('p', true),
    new lettera('a', true),
    new lettera('s', true),
    new lettera('d', true),
    new lettera('f', true),
    new lettera('g', true),
    new lettera('h', true),
    new lettera('j', true),
    new lettera('k', true),
    new lettera('l', true),
    new lettera('z', true),
    new lettera('x', true),
    new lettera('c', true),
    new lettera('v', true),
    new lettera('b', true),
    new lettera('n', true),
    new lettera('m', true),
  ];
  lettera: string;

  @Output() letteraSelezionata = new EventEmitter<string>();
  @Input() errori;

  onLetteraUsata(i) {
    this.alfabeto[i].valore = false;
    this.letteraSelezionata.emit(this.alfabeto[i].nome);
  }

  onResettaTastiera() {
    for (let i = 0; i < 26; i++) {
      this.alfabeto[i].valore = true;
    }
  }

  ngOnChanges() {
    if (this.errori == 0) {
      for (let i = 0; i < 26; i++) {
        this.alfabeto[i].valore = true;
      }
    }
    if (this.errori == 6 || this.errori == -1) {
      for (let i = 0; i < 26; i++) {
        this.alfabeto[i].valore = false;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
