import { CreatorssvcService } from './../../services/creatorssvc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css'],
})
export class CreatorsComponent implements OnInit {
  filterCard = '';
  pageActual: number = 1;
  creator;
  creator2;

  constructor(private creatorsSvc: CreatorssvcService) {}

  ngOnInit(): void {
    this.creatorsSvc.getCreators().subscribe(
      (data) => {
        this.creator = data;
        this.creator2 = this.creator.data.results;
        console.log('creators data:', this.creator2);
      },
      (error) => console.log('Error:', error)
    );
  }
}
