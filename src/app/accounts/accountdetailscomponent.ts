import { Component, Output, EventEmitter  } from '@angular/core';
import { account } from "./account.type";
import { AccountFilterComponnent } from "./accountfilter.component";

@Component({
    selector: 'accountdetails',
    templateUrl: 'app/accounts/accountlist.component.html'
})

export class accountdetailsComponent {  
    @Output() private account: Account;

}