import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Account} from './account.type';
import {Logger} from '../logger.service';

@Injectable()
export class AccountListService {

    private accountsUrl = 'http://localhost:3004/accounts';  // URL to web API

    constructor(private logger:Logger){}

    ACCOUNTS = [
        new Account('Savings account', 300),
        new Account('Current account', 500, 'Work expenses'),
        new Account('Loan', -200)
    ];

    getAccounts() {
        this.logger.log('Initialising Accounts...');
        return this.ACCOUNTS
    }
}
