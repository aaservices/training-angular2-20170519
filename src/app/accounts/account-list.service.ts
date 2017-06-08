import {Injectable} from '@angular/core';
import {ACCOUNTS} from './mock-accounts';
import {Logger} from '../logger.service';

@Injectable()
export class AccountListService {

    constructor(){}

    getAccountList() {
        return ACCOUNTS;
    }
}
