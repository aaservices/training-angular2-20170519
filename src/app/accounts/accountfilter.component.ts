import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'accountfilter',
    templateUrl: 'app/accounts/accountfilter.component.html'
})
export class AccountFilterComponnent{
    //@Output() changed: EventEmitter<string>;
    private strCriteria:string;

    private SearchList():void{
        //alert(this.strCriteria);
        //this.changed.emit(this.strCriteria);
    }

    private Clear():void{
        this.strCriteria = "";
        this.SearchList();
    }
}