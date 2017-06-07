import { Injectable } from '@angular/core';

export class User {
    constructor(
        public name: string,
        public isAuthorised = false) { }
}

let bob = new User('Bob', true);

@Injectable()
export class UserService {
    user = bob;  // initial user is Bob
}
