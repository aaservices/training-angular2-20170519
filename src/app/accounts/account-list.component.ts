import {Component} from '@angular/core';

import { Account } from './account.type';
import { AccountFilterPipe } from './account-filter.pipe';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  private listVisibility: boolean;
  private searchTerm: string;
  private accounts: Array<Account>;
  private viewAccounts: Array<Account>;
  private selectedAccount: Account;
  constructor(){
    this.listVisibility = true;
    this.searchTerm = '';
    this.accounts=[new Account('100-505-854-1234-001','Τρεχούμενος',5785.55,'EUR'),
                   new Account('100-505-854-1234-002','Τρεχούμενος',1567.00,'USD'),
                   new Account('100-505-854-1234-003','Αποταμιευτικός',3670.64,'GBP'),
                   new Account('100-505-854-1234-004','Αποταμιευτικός',1230.00,'EUR'),
                   new Account('100-505-854-1234-005','Δανειακός',-2567.15,'EUR')];  
    this.viewAccounts=this.accounts;
  }
  private toggleList():void{
    this.listVisibility =!this.listVisibility;
  }
  private selectAccount(account:Account):void{
   console.log(account);
   this.selectedAccount = account;
  }
  private clearFilter():void {
    this.searchTerm='';
    this.viewAccounts=this.accounts;
  }
  private visibleAccount(account:Account):boolean {
    console.log('account.name:'+account.name +' this.searchTerm:'+this.searchTerm+ ' account.type.indexOf(this.searchTerm) >=0:'+
                (account.name.indexOf(this.searchTerm) >=0));
    return account.name.indexOf(this.searchTerm) >=0;
  }
  private filterAccounts():void {
    if (this.searchTerm) {
      this.viewAccounts = this.accounts.filter(this.visibleAccount, this);
    }
    else {
      this.clearFilter();
    }
  }
}
