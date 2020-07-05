import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-single',
  templateUrl: './character-single.component.html',
  styleUrls: ['./character-single.component.css'],
})
export class CharacterSingleComponent implements OnInit {
  // public cards: {
  //   id: string;
  //   imagen: string;
  //   name: string;
  //   description: string;
  //   comics: string;
  //   series: string;
  // } = {
  //   id: '1',
  //   imagen:
  //     'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
  //   name: 'Capitan America',
  //   description: 'hola mundo',
  //   comics: '499',
  //   series: '4',
  // };

  singleCharacter;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.singleCharacter.id = this.route.snapshot.params.id;
    console.log('ID:', this.route.snapshot.params.id);
  }
}
