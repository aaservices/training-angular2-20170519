
import {Account} from './account.type';
import {Injectable} from '@angular/core';

@Injectable()
export class GetAccountsService {

    constructor(){}

    ACCOUNTS = [
        new Account('Savings account', 300),
        new Account('Current account', 500, 'Work expenses'),
        new Account('Loan', -200)
    ];

    getAccounts() {
        return this.ACCOUNTS;
    }
}
