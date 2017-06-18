import { Injectable } from '@angular/core';

import { Account } from './account.type';

@Injectable()
export class AccountListService {
    private accounts: Array<Account>;
    constructor() {
      this.accounts = [
        new Account('100-505-854-1234-001','Τρεχούμενος',5785.55,'EUR'),
        new Account('100-505-854-1234-002','Τρεχούμενος',1567.00,'USD'),
        new Account('100-505-854-1234-003','Αποταμιευτικός',3670.64,'GBP'),
        new Account('100-505-854-1234-004','Αποταμιευτικός',1230.00,'EUR'),
        new Account('100-505-854-1234-005','Δανειακός',-2567.15,'EUR')
      ];  
    }
    getAccountList():Array<Account> {
      return this.accounts;
    }
}
