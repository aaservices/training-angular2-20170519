import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountListComponent } from './accounts/account-list.component';
import { AccountFilterPipe} from './accounts/account-filter.pipe';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, AccountListComponent,AccountFilterPipe],
    bootstrap: [AppComponent]

})
export class AppModule { }
