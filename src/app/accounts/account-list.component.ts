import {Component, ViewChild, Inject} from '@angular/core';
import { Account } from './account.type';
import { SearchFormComponent } from '../utils/search-form/search-form';
import {AccountListService} from './account-list.service';
import {Logger} from '../logger.service';
import {BetterLogger} from '../betterLogger.service';
import {DI_CONFIG, APP_CONFIG, AppConfig} from '../app-config';
import {accountListServiceProvider} from './account-list.service.provider';

@Component({
    selector: 'account-list',
    templateUrl: 'app/accounts/account-list.component.html',
    styleUrls: ['app/accounts/account-list.component.css'],
    providers: [
        accountListServiceProvider,
        BetterLogger,
        // {provide: Logger, useExisting: BetterLogger},
        {provide: APP_CONFIG, useValue: DI_CONFIG}
    ]

})
export class AccountListComponent {
    @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
    private accounts: Array<Account>;
    private searchTerm: string;
    private listVisibility: boolean;
    private selectedAccount: Account | null;

    constructor(private accountListService:AccountListService, private logger:Logger, @Inject(APP_CONFIG) appConfig: AppConfig) {
        this.accounts = accountListService.getAccountList();
        this.logger.log('abc');
        this.listVisibility = true;
        logger.log(appConfig.apiEndpoint);
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
