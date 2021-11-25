import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errori',
  templateUrl: './errori.component.html',
  styleUrls: ['./errori.component.css'],
})
export class ErroriComponent implements OnInit {
  @Input() errori;

  constructor() {}

  ngOnInit(): void {}
}
