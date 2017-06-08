import { Component } from '@angular/core';
import { AccountListService } from './accounts/account-list.service';
import { Account } from './accounts/account.type';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    name: string = '';
    accounts: Array<Account>;

    constructor(private accountListService: AccountListService) {
        this.name = 'Learning Actors';
        this.accounts = accountListService.getAccountList();
    }
}
