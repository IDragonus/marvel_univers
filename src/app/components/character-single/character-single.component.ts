import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersvcService } from './../../services/charactersvc.service';

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
  singleCharacter2;
  comics;
  comics2 = [];
  creators = [];
  series;
  series2;

  constructor(
    private route: ActivatedRoute,
    private character: CharactersvcService
  ) {}

  ngOnInit() {
    this.singleCharacter = this.route.snapshot.params.id;
    console.log('ID:', this.singleCharacter);

    this.getCharacter();
    this.getComicsbyId();
    this.getSeriesId();
  }

  getCharacter() {
    this.character.getSingleCharacter(this.singleCharacter).subscribe(
      (data) => {
        this.singleCharacter = data;
        this.singleCharacter2 = this.singleCharacter.data.results;
      },
      (error) => console.log('Error:', error)
    );
  }

  getComicsbyId() {
    this.character.getComics(this.singleCharacter).subscribe(
      (data) => {
        this.comics = data;
        this.comics2 = this.comics.data.results;
        for (let i = 0; i < this.comics2.length; i++) {
          this.creators.push(this.comics2[i].creators);
        }
      },
      (error) => console.log('Error:', error)
    );
  }

  getSeriesId() {
    this.character.getSeries(this.singleCharacter).subscribe(
      (data) => {
        this.series = data;
        this.series2 = this.series.data.results;
        console.log('series', this.series2);
        // for (let i = 0; i < this.series2.length; i++) {
        //    this.creators.push(this.comics2[i].creators);
        //   }
      },
      (error) => console.log('Error:', error)
    );
  }
}
