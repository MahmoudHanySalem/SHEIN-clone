// src/app/shared/shorten-number.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenNumber',
  standalone: true
})
export class ShortenNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 1000) {
      // Round to nearest 100 for < 1000
      const rounded = Math.round(value / 100) * 100;
      return `${rounded}`;
    }

    // For >= 1000
    if (value < 10000) {
      // Show one decimal place like 2.5k
      const rounded = Math.round(value / 500) * 500; // step 500
      return (rounded % 1000 === 0)
        ? `${rounded / 1000}k`
        : `${(rounded / 1000).toFixed(1)}k`;
    }

    // For >= 10k and < 1M
    if (value < 1_000_000) {
      const rounded = Math.round(value / 1000); // step 1k
      return `${rounded}k`;
    }

    // For >= 1M
    const rounded = Math.round(value / 100000) / 10; // one decimal place in millions
    return `${rounded}M`;
  }
}
