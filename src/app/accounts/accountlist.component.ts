import { Component, Output, EventEmitter  } from '@angular/core';
import { account } from "./account.type";
import { AccountFilterComponnent } from "./accountfilter.component";

@Component({
    selector: 'accountlist',
    templateUrl: 'app/accounts/accountlist.component.html'
})

export class AccountListComponent {  
    //@ViewChild(AccountFilterComponnent) searchForm :AccountFilterComponnent;
    private strCriteria: string;
    public accounts: account[] = [];
    public selectedAccounts: account;

    constructor (){
        let a = new account();
        for (let i = 1; i < 7; i++) {
            this.accounts.push(a.getRundomAccount(i))
        }
    }

/*    private SearchList():void{
        alert(this.strCriteria);
        //this.changed.emit(this.strCriteria);
    }*/

    private Clear():void{
        this.strCriteria = "";
        //this.SearchList();
    }
}