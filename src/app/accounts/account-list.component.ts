import { Component , ViewChild } from '@angular/core';

import { Account } from './account.type';
import { AccountFilterPipe } from './account-filter.pipe';
import { SearchFormComponent } from '../utils/search-form.component';
import { AccountListService } from './account-list.service';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers:[AccountListService]
})
export class AccountListComponent {
  @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
  private listVisibility: boolean =true;
  private searchTerm: string ='';
  private selectedAccount: Account =null;
  private accounts: Array<Account>;

  constructor(private accountList:AccountListService){
    this.accounts=accountList.getAccountList();  
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
