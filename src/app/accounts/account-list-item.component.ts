import {Component} from '@angular/core';
import { Input , Output , EventEmitter } from '@angular/core';

import { Account } from './account.type';

@Component({
  selector: 'account-list-item',
  templateUrl: './account-list-item.component.html',
})
export class AccountListItemComponent{
    @Input() private account: Account;
    @Output() private accountSelect: EventEmitter<Account> = new EventEmitter();

    selectAccount(selectedAccount:Account):void {
      this.accountSelect.emit(selectedAccount);
    }
}