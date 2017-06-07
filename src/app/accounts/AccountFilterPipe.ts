import { Component, Output, EventEmitter, Pipe, PipeTransform  } from '@angular/core';
import { account } from "./account.type";

@Pipe({
    name: 'accountfilter'
})
export class AccountFilterPipe implements PipeTransform {  

    transform(accounts: account[], search: string): account[] {
        if (search)
        {
            return accounts.filter(a => a.name.indexOf(search) > -1);
        }
        else
        {
            return accounts;
        }
    }

}