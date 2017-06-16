import { Component, ViewChild } from '@angular/core';
import { Account } from './account.type';
import { SearchFormComponent } from '../utils/search-form/search-form';
import { GetAccountsService } from  './account-list-service';


@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html',
    styleUrls: ['app/accounts/account-list.component.css']
})
export class AccountListComponent {
    @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
    private accounts: Array<Account>;
    private searchTerm: string;
    private listVisibility: boolean;
    private selectedAccount: Account | null;

    constructor(private accountListService:GetAccountsService) {
        this.accounts = accountListService.getAccounts();
        this.listVisibility = true;
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
