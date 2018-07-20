import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import {TestAsyncServices} from './test.async.services';


@Injectable()
export class TestResolver implements Resolve<Observable<string[]>> {

    constructor(private testAsyncServices: TestAsyncServices) {
        console.log('*******************');
        console.log('TestResolver constructor');
        console.log(TestAsyncServices);
        console.log('*******************');
    }

    resolve(route: ActivatedRouteSnapshot): Observable<string[]> {
        return Observable.fromPromise(this.getLocalUsers());
    }

    async getLocalUsers(): Promise<string[]> {
        const vm = this;
        return new Promise<string[]>(async (resolve, rejected) => {
            const users = await vm.testAsyncServices.getUsers();
            resolve(users);
        });
    }
}
