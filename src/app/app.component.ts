import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'impiccato';
  lettera: string;
  erroriComponent: number;
  tastiera: boolean;

  onLettera(e) {
    this.lettera = e;
  }

  onErrori(e) {
    this.erroriComponent = e;
  }
}
