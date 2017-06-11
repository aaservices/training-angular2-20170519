import { Component, Pipe, PipeTransform } from '@angular/core';

import { Account } from './account.type';


@Pipe({name: 'accountFilter'})
export class AccountFilterPipe implements PipeTransform{
  private pSearchTerm: string='';
  private visibleAccount(account:Account):boolean {
    console.log('account.name:'+account.name +' this.searchTerm:'+this.pSearchTerm+ ' account.type.indexOf(this.searchTerm) >=0:'+
                (account.name.indexOf(this.pSearchTerm) >=0));
    return account.name.indexOf(this.pSearchTerm) >=0;
  }
  transform (accounts:Array<Account>, searchTerm:string):Array<Account> {
    this.pSearchTerm = searchTerm;
    return accounts.filter(this.visibleAccount, this);
  }
}