import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css'],
})
export class CreatorsComponent implements OnInit {
  filterCard = '';
  pageActual: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
