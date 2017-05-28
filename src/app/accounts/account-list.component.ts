import {Component} from '@angular/core';
import { Account } from './account.type';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
})
export class AccountListComponent {
  private listVisibility: boolean;
  private accounts: Array<Account>;
  constructor(){
    this.listVisibility = true;
    this.accounts=[new Account('100-505-854-1234-001','Current account',5785.55,'EUR'),
                   new Account('100-505-854-1234-002','Current account',1567.00,'USD'),
                   new Account('100-505-854-1234-003','Savings account',3670.64,'GBP'),
                   new Account('100-505-854-1234-004','Savings account',1230.00,'EUR')];  
  }
  toggleList():void{
    this.listVisibility =!this.listVisibility;
  }
}
