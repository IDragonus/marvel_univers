import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  public cards: {
    id: string;
    imagen: string;
    name: string;
    description: string;
    comics: string;
    series: string;
  }[] = [
    {
      id: '1',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '2',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '3',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '4',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '5',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '6',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '7',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '8',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '9',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '10',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '11',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '12',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '13',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '14',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '15',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '16',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '17',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
    {
      id: '18',
      imagen:
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg',
      name: 'Capitan America',
      description: 'el capi',
      comics: '499',
      series: '4',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
