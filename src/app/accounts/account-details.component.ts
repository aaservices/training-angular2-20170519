import {Component} from '@angular/core';
import { Input } from '@angular/core';

import { Account } from './account.type';

@Component({
  selector: 'account-details',
  templateUrl: './account-details.component.html',
})
export class AccountDetailsComponent{
    @Input() private account: Account;
}