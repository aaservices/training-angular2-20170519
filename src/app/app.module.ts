import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountListComponent } from './accounts/accountlist.component';
import { AccountFilterComponnent } from './accounts/accountfilter.component'
import {AccountFilterPipe} from './accounts/AccountFilterPipe';
import {accountdetailsComponent} from './accounts/accountdetailscomponent';

@NgModule({
    imports: [BrowserModule, FormsModule],
    //declarations: [AppComponent],
    declarations: [AppComponent, 
        AccountListComponent, 
        AccountFilterComponnent,
        AccountFilterPipe,
        accountdetailsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
