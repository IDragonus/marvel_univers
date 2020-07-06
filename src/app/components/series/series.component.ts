import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  filterCard = '';
  pageActual: number = 1;
  constructor() {}

  ngOnInit(): void {}
}
