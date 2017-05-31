
import { Component } from '@angular/core';
import {Account} from './account.type';

@Component({
    selector: 'accountlist',
    templateUrl: 'app/accounts/accountlist.component.html',
})
export class AccountListComponent {
            private accounts:Array<Account>;
            
            private searchTearm: string;
            private listVisibiliy: boolean;
            private selectedAcount : Account;


    constructor(){
        this.accounts = [new Account('savings', 300),
                         new Account('current', 500) ]


        this.listVisibiliy = true;
    }
    toggleList(): void {
        this.listVisibiliy = !this.listVisibiliy;
         }

         selectAccount(account:Account) : void {
             this.selectedAcount = account;
         }
}
