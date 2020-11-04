import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  constructor() { }
  @Input() rating
  filledStars
  hollowStars
  ngOnInit(): void {
    this.generateStarsByRating(this.rating);
  }

  generateStarsByRating(rating) {
    this.filledStars = [...Array(parseInt(rating)).keys()];
    this.hollowStars = [...Array(parseInt((5 - rating).toString())).keys()];
  }

}
