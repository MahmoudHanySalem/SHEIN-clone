// src/app/shared/star-rating.component.ts
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent {
  @Input() rating = 0; // e.g., 3.5
  @Input() max = 5;

  // unique id so multiple components on the page don't clash
  private uid = Math.random().toString(36).slice(2, 9);
  get halfId() {
    return `half-${this.uid}`;
  }

  get fullCount() {
    return Math.floor(this.rating);
  }
  get hasHalf() {
    return this.rating % 1 >= 0.5 && this.fullCount < this.max;
  }
  get starIndexes() {
    return Array.from({ length: this.max }, (_, i) => i);
  }
}
