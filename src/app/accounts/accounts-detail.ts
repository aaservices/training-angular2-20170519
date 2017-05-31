
import {Account} from './account.type'
import {Component, Input} from '@angular/core';

@Component ({
    selector: 'account-details',
    templateUrl: 'app/accounts/accounts-details.html'
})

export class AccountDetailsComponent {
    @Input() account : Account;
}