import { ComicssvcService } from './../../services/comicssvc.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comic-single',
  templateUrl: './comic-single.component.html',
  styleUrls: ['./comic-single.component.css'],
})
export class ComicSingleComponent implements OnInit {
  singleComic;
  singleComic2;
  characters;
  characters2 = [];
  creators = [];
  precio;

  constructor(private route: ActivatedRoute, private comic: ComicssvcService) {}

  ngOnInit(): void {
    this.singleComic = this.route.snapshot.params.id;
    console.log('ID:', this.singleComic);
    this.getComic();
    this.getComicCharacters();
  }

  getComic() {
    this.comic.getSingleComic(this.singleComic).subscribe(
      (data) => {
        this.singleComic = data;
        this.singleComic2 = this.singleComic.data.results[0];
        this.precio = this.singleComic.data.results[0].prices[0].price;

        console.log('tam', this.singleComic2.available);
        console.log('a ver', this.singleComic2.creators);
        for (let i = 0; i < this.singleComic2.creators.available; i++) {
          // this.creators.push(this.singleComic2[i].creators[0]);
          // this.creators.push(this.singleComic2.creators[0].items);
        }
        this.creators.push(this.singleComic2.creators.items);

        console.log('creadores', this.creators);
      },
      (error) => console.log('Error:', error)
    );
  }

  getComicCharacters() {
    this.comic.getComicCharacters(this.singleComic).subscribe(
      (data) => {
        this.characters = data;
        this.characters2 = this.characters.data.results;
        console.log('character', this.characters2);
      },
      (error) => console.log('Error:', error)
    );
  }
}
