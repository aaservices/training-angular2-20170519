import {Injectable, Optional} from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Account} from './account.type';
import {Logger} from '../logger.service';

@Injectable()
export class AccountListService {

    private accountsUrl = 'http://localhost:3004/accounts';  // URL to web API

    constructor(private logger:Logger, @Optional() private http: Http) {}

    getAccounts() {
    this.logger.log('Initialising Accounts...');
    return this.http.get(this.accountsUrl).toPromise().then(res => {
        return this.extractData(res)
    })
}

    private extractData(res: Response): Account[] {
        return res.json().data || res.json() || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
