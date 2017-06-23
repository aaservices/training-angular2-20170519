import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountListComponent } from './accounts/account-list.component';
import { NewAccountComponent } from './accounts/new-account.component';
import { PageNotFoundComponent } from './app-page-not-found.component';

const routes: Routes=[
    {path:'', pathMatch:'full', redirectTo:'accounts'},
    {path:'accounts', component:AccountListComponent},
    {path:'newaccount', component:NewAccountComponent},
    {path:'**', pathMatch:'full', component:PageNotFoundComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
   declarations: [PageNotFoundComponent]
})
export class AppRoutingModule{
}
