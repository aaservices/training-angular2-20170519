import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Account } from './account.type';
import { Logger } from '../utils/logger.service';

@Injectable()
export class AccountListService {
    private accounts: Array<Account>;
    constructor(private logger:Logger) {
      logger.log('AccountListService:Initializing Accounts');
      this.accounts = [
        new Account('100-505-854-1234-001','Τρεχούμενος',5785.55,'EUR'),
        new Account('100-505-854-1234-002','Τρεχούμενος',1567.00,'USD'),
        new Account('100-505-854-1234-003','Αποταμιευτικός',3670.64,'GBP'),
        new Account('100-505-854-1234-004','Αποταμιευτικός',1230.00,'EUR'),
        new Account('100-505-854-1234-005','Δανειακός',-2567.15,'EUR')
      ];  
      logger.log('AccountListService:this.accounts created');
    }
    getAccountList():Array<Account> {
      return this.accounts;
    }
}
