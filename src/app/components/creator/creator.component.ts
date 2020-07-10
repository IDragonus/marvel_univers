import { CreatorssvcService } from './../../services/creatorssvc.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
})
export class CreatorComponent implements OnInit {
  creatorID;
  oneCreator;
  creators;
  oneComic;
  comics;
  constructor(
    private route: ActivatedRoute,
    private creatorSvc: CreatorssvcService
  ) {}

  ngOnInit(): void {
    this.creatorID = this.route.snapshot.params.id;
    console.log('creator id:', this.creatorID);

    this.getOneCreator();
    this.getComicsById();
  }

  getOneCreator() {
    this.creatorSvc.getSingleCreator(this.creatorID).subscribe(
      (data) => {
        this.creators = data;
        console.log('creators data:', data);
        this.oneCreator = this.creators.data.results;
        console.log('one creator data:', this.oneCreator);
      },
      (error) => console.log('Error:', error)
    );
  }

  getComicsById() {
    this.creatorSvc.getComics(this.creatorID).subscribe(
      (data) => {
        this.comics = data;
        this.oneComic = this.comics.data.results;
        console.log('one comic data:', this.oneComic);
      },
      (error) => console.log('error', error)
    );
  }
}
