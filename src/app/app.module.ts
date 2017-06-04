import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountFilterPipe } from './accounts/account-filter.pipe';
import { AccountListComponent } from './accounts/account-list.component';
import { AccountListItemComponent } from './accounts/account-list-item.component';
import { AccountDetailsComponent }  from './accounts/account-details.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, AccountFilterPipe, 
                   AccountListComponent, AccountListItemComponent, 
                   AccountDetailsComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
