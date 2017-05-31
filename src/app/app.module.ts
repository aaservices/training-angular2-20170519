import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountListComponent } from './accounts/acccountlist.component';
import { AccountFilterPipe} from './accounts/account.filter.pipe';
import {AccountDetailsComponent} from './accounts/accounts-detail';



@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent,AccountListComponent, AccountFilterPipe,AccountDetailsComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
