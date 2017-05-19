import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ AccountListComponent } from './accounts/acccountlist.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,AccountListComponent],
    bootstrap: [AppComponent,AccountListComponent]
})
export class AppModule { }
