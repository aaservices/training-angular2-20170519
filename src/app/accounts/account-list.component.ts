import {Component} from '@angular/core';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
})
export class AccountListComponent {
  private listVisibility: boolean;
  constructor(){
    this.listVisibility = true;
  }
  toggleList():void{
    this.listVisibility =!this.listVisibility;
  }
}
