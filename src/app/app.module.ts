import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountFilterPipe } from './accounts/account-filter.pipe';
import { SearchFormComponent } from './utils/search-form.component';
import { AccountListComponent } from './accounts/account-list.component';
import { AccountListItemComponent } from './accounts/account-list-item.component';
import { AccountDetailsComponent }  from './accounts/account-details.component';
import { Logger } from './utils/logger.service';

@NgModule({
    imports: [BrowserModule, FormsModule,  HttpModule],
    declarations: [AppComponent, AccountFilterPipe, 
                   SearchFormComponent, AccountListComponent,
                   AccountListItemComponent, AccountDetailsComponent],
    bootstrap: [AppComponent],
    providers:[Logger]
})
export class AppModule { }
