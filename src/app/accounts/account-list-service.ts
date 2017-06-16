
import {Account} from './account.type';
import {Injectable} from '@angular/core';

@Injectable()
export class GetAccountsService {
    constructor(){}
    ACCOUNTS = [
        new Account('tamieytirio', 30000),
        new Account('trexoumenos', 5000, 'mis8odosia'),
        new Account('trexoumenos', 10300, 'apotamieysi'),
        new Account('daneio', -200)
    ];
    getAccounts() {
        return this.ACCOUNTS
    }
}
