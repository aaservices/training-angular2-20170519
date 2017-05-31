import { Component } from '@angular/core';
import {Account} from './account.type';

@Component({
    selector: 'accountlist',
    templateUrl: 'app/accounts/accountlist.component.html'
})

export class AccountListComponent { 
       private accounts: Array<Account>;
       private viewAccounts: Array<Account>;
       private searchTerm: string;
       private listVisibility: boolean;
       private selectedAccount: Account;

    constructor(){
       this.accounts = [
           new Account('Savings account',300),
           new Account('Current account', 500, 'Work expenses'),
           new Account('Loan', 200)
       ];
       this.listVisibility = true;
    }

    selectAccount(account: Account):void{
        this.selectedAccount = account;
    }

}
