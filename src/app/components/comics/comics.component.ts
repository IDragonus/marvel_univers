import { ComicssvcService } from './../../services/comicssvc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements OnInit {
  comics;
  comics2 = [];
  filterCard = '';
  pageActual: number = 1;
  constructor(private comicSvc: ComicssvcService) {}

  ngOnInit(): void {
    this.comicSvc.getComics().subscribe(
      (data) => {
        this.comics = data;
        this.comics2 = this.comics.data.results;
      },
      (error) => console.log('Error:', error)
    );
  }
}
