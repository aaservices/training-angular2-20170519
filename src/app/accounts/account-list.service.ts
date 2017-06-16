import {Injectable} from '@angular/core';
import {Logger} from '../logger.service';
import {Account} from './account.type';

@Injectable()
export class AccountListService {

    constructor(private logger:Logger){}

    ACCOUNTS = [
        new Account('Savings account', 300),
        new Account('Current account', 500, 'Work expenses'),
        new Account('Loan', -200)
    ];

    getAccountList() {
        this.logger.log('Initialising Accounts...');
        return this.ACCOUNTS
    }
}
