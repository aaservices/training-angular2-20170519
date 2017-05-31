import { Component } from '@angular/core'; 


@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html',
})
export class AccountListComponent { 

    private accounts: Array<Account>;

    constructor(){
        this.accounts=[
            new Account('My First Account',200, 'have friendly first'),
            new Array('My Second Account','600'),
            new Array('Savings - Account','120'),
            new Array('my Last Account with frld','frld name','120')
        ]
    }
}