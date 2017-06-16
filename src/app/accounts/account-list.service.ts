import {Injectable} from '@angular/core';
import {Account} from './account.type';

export class AccountListService {

    constructor(){}

    ACCOUNTS = [
        new Account('Savings account', 300),
        new Account('Current account', 500, 'Work expenses'),
        new Account('Loan', -200)
    ];

    getAccountList() {
        return this.ACCOUNTS;
    }
}
