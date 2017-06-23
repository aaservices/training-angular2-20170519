import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountListComponent } from './accounts/account-list.component';
import { PageNotFoundComponent } from './app-page-not-found.component';

const routes: Routes=[
    {path:'', pathMatch:'full', redirectTo:'accounts'},
    {path:'accounts', component:AccountListComponent},
    {path:'**', pathMatch:'full', component:PageNotFoundComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule{
}
