import { Component } from '@angular/core';
import { Account } from './account.type';

@Component({
    selector: 'account-detail',
    templateUrl: 'app/accounts/account-detail.component.html'
})
export class AccountDetailComponent {
    private accountdetail: nameD<string>;

    constructor() {
        this.accounts = [
            new Account('Savings account', 300),
            new Account('Current account', 500, 'Work expenses'),
            new Account('CurrentS account', -500, 'Save save save')
        ];
    }
}