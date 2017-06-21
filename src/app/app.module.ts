import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Logger } from './logger.service';
import { AppRoutingModule, routableComponents, routableServices } from './app-routing.module';
import {TemplateDrivenFormComponent} from "./Forms/template-driven-form/form";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TemplateDrivenFormComponent,
        routableComponents
    ],
    bootstrap: [AppComponent],
    providers: [Logger, routableServices]
})
export class AppModule { }
