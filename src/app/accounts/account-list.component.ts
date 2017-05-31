import { Component } from '@angular/core'; 
import {Account} from './account.type';


@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html',
})
export class AccountListComponent { 

    private accounts: Array<Account>;

    constructor(){
        this.accounts=[
            new Account('My First Account',200, 'have friendly first'),
            new Account('My Second Account',600),
            new Account('Savings - Account',120),
            new Account('my Last Account with frld',345,'frld name')
        ]
    }
}