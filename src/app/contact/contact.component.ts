import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nameValue: string = '';
  ageValue: string = '';
  mailValue: string = '';
  passValue: string = '';

  isFormValid():boolean{
    if(this.ageValue && this.mailValue && this.nameValue && this.passValue){
      return true;
    }
    else{
      return false ;
    }
  }
}
