import {Component, ViewChild, OnInit} from '@angular/core';
import {Account} from './account.type';
import {SearchFormComponent} from '../utils/search-form/search-form';
import {AccountListService} from './services/account-list.service';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TemplateDrivenFormComponent} from "../Forms/template-driven-form/form";

@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html',
    styleUrls: ['app/accounts/account-list.component.css'],
    providers: [AccountListService]
})
export class AccountListComponent implements OnInit {
    @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
    @ViewChild(TemplateDrivenFormComponent) templateDrivenForm: TemplateDrivenFormComponent;
    private errorMessage: string;
    private accounts: Observable<Account[]>;
    private searchTermStream = new BehaviorSubject<string>('');
    private listVisibility: boolean;
    private selectedAccount: Account | null;

    constructor(private accountListService: AccountListService) {}

    ngOnInit() {
        this.getAccounts();
        this.listVisibility = true;
        this.initSearchTerm();
    }

    initSearchTerm() {
        this.searchTermStream
            .subscribe(
                searchTerm => this.accounts = this.accountListService.getAccounts(searchTerm),
                error => this.errorMessage = error
            );
    }

    getAccounts(searchTerm?: string) {
        this.accounts = this.accountListService.getAccounts(searchTerm);
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
        if (!searchTerm) {
            return;
        }

        this.searchTermStream.next(searchTerm);
    }
}
