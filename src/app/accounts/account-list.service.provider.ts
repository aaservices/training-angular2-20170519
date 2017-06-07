import {AccountListService} from './account-list.service';
import {Logger} from '../logger.service';
import {UserService} from './user.service';

let accountListServiceFactory = (logger: Logger, user: UserService) => {
    return new AccountListService(logger, user.user.isAuthorised);
};


export let accountListServiceProvider =
    { provide: AccountListService,
        useFactory: accountListServiceFactory,
        deps: [Logger, UserService]
    };
