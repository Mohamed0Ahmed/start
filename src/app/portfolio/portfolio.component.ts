import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  userClick: boolean = false;
  imgSrc:string='';

  showImage(imagePath: string): void {

    this.userClick = true;
    this.imgSrc = imagePath;
  }

  hideContain(event: Event): void {
    if (!(event.target instanceof HTMLImageElement)) {
      this.userClick = false;
    }
  }
  
}
