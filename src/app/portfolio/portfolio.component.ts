import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  userClick: boolean = false;
  imgSrc: string = '';
  imgs: string[] = [
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
  ];

  showImage(i: number): void {
    this.userClick = true;
    this.imgSrc = this.imgs[i];
  }

  hideContain(event: Event): void {
    if (!(event.target instanceof HTMLImageElement)) {
      this.userClick = false;
    }
  }
}
