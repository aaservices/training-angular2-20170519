import {Component} from '@angular/core';
import { Account } from './account.type';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
})
export class AccountListComponent {
  private listVisibility: boolean;
  private searchTerm: string;
  private accounts: Array<Account>;
  private viewAccounts: Array<Account>;
  constructor(){
    this.listVisibility = true;
    this.searchTerm = '';
    this.accounts=[new Account('100-505-854-1234-001','Current account',5785.55,'EUR'),
                   new Account('100-505-854-1234-002','Current account',1567.00,'USD'),
                   new Account('100-505-854-1234-003','Savings account',3670.64,'GBP'),
                   new Account('100-505-854-1234-004','Savings account',1230.00,'EUR')];  
    this.viewAccounts=this.accounts;
  }
  private toggleList():void{
    this.listVisibility =!this.listVisibility;
  }
  private clearFilter():void {
    this.searchTerm='';
    this.viewAccounts=this.accounts;
  }
  private visibleAccount(account:Account):boolean {
    console.log('account.type:'+account.type +' this.searchTerm:'+this.searchTerm+ ' account.type.indexOf(this.searchTerm) >=0:'+
                (account.type.indexOf(this.searchTerm) >=0));
    return account.type.indexOf(this.searchTerm) >=0;
  }
  private filterAccounts():void {
    if (this.searchTerm) {
      this.viewAccounts = this.accounts.filter(this.visibleAccount, this);
    }
  }
}
