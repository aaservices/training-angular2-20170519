import { Component , ViewChild } from '@angular/core';

import { Account } from './account.type';
import { AccountFilterPipe } from './account-filter.pipe';
import { SearchFormComponent } from '../utils/search-form.component';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
  private listVisibility: boolean =true;
  private searchTerm: string ='';
  private selectedAccount: Account =null;
  private accounts: Array<Account>;

  constructor(){
    this.accounts=[new Account('100-505-854-1234-001','Τρεχούμενος',5785.55,'EUR'),
                   new Account('100-505-854-1234-002','Τρεχούμενος',1567.00,'USD'),
                   new Account('100-505-854-1234-003','Αποταμιευτικός',3670.64,'GBP'),
                   new Account('100-505-854-1234-004','Αποταμιευτικός',1230.00,'EUR'),
                   new Account('100-505-854-1234-005','Δανειακός',-2567.15,'EUR')];  
  }
  private toggleList():void{
    this.listVisibility =!this.listVisibility;
  }
  private selectAccount(account:Account):void{
   console.log(account);
   this.selectedAccount = account;
  }
  private clearFilter():void {
    this.searchForm.clear();
    this.selectedAccount = null;
  }
  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }
}
