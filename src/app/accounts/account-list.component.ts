import {Component, ViewChild} from '@angular/core';
import {Account} from './account.type';
import {SearchFormComponent} from '../utils/search-form/search-form';
import {AccountListService} from './account-list.service';
import {Logger} from '../logger.service';

@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html',
    styleUrls: ['app/accounts/account-list.component.css'],
    providers: [AccountListService, Logger]
})


export class AccountListComponent {
    @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
    private errorMessage: string;
    private accounts: Promise<Account[]>;
    private searchTerm: string;
    private listVisibility: boolean;
    private selectedAccount: Account | null;

    constructor(private accountListService: AccountListService) {
        this.getAccounts();
        this.listVisibility = true;
    }

    getAccounts() {
        //Create a thenable from its promise then assign its value to this.accounts
        // this.accountListService.getAccounts().then(
        //     accounts => this.accounts = accounts,
        //     error => this.errorMessage = <any>error
        // );
        // OR....
        // call the thenable method and have the async pipe take care of the rest in the view

        this.accounts = this.accountListService.getAccounts()
    }

    toggleList(): void {
        this.listVisibility = !this.listVisibility;
    }

    clearFilter(): void {
        this.searchForm.clear();
        this.clearSelectedAccount();
    }

    selectAccount(account: Account): void {
        this.selectedAccount = account;
    }

    clearSelectedAccount(): void {
        this.selectedAccount = null;
    }

    search(searchTerm: string): void {
        this.searchTerm = searchTerm;
    }
}
