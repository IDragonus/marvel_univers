import { CharactersvcService } from './../../services/charactersvc.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters;
  characterList;
  filterCard = '';
  pageActual: number = 1;

  constructor(private character: CharactersvcService) {}

  ngOnInit(): void {
    this.character.getCharacters().subscribe(
      (data) => {
        this.characters = data;
        this.characterList = this.characters.data.results;
        console.log('arreglo', this.characterList);
      },
      (error) => console.log('Error:', error)
    );
  }
}
