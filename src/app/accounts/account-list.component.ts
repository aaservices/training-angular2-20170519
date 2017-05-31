import { Component } from '@angular/core';
import { Account } from './account-type';


@Component({
    selector: 'account-list',
    templateUrl: '/app/accounts/account-list.component.html',
})
export class AccountListComponent {
    private accounts: Array<Account>;

    constructor() {
        this.accounts= [
            new Account('Savings Account',300),
             new Account('Current Account',-200),
              new Account('Staff Account',23400, 'Payroll'),
               ];
    }
 }
