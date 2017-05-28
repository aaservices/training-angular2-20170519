import {Component} from '@angular/core';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
})
export class AccountListComponent {
  private listVisibility: boolean;
  private accounts: Array<{id:string, type:string, amount:number, currency:string}>;
  constructor(){
    this.listVisibility = true;
    this.accounts=[{id:'100-505-854-1234-001',type:'Current account',amount:5785.55,currency:'EUR'},
                   {id:'100-505-854-1234-002',type:'Current account',amount:1567.00,currency:'USD'},
                   {id:'100-505-854-1234-003',type:'Savings account',amount:3670.64,currency:'GBP'},
                   {id:'100-505-854-1234-004',type:'Savings account',amount:1230.00,currency:'EUR'}];  
  }
  toggleList():void{
    this.listVisibility =!this.listVisibility;
  }
}
