import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import {TestAsyncServices} from './test.async.services';


@Injectable({
  providedIn: 'root',
  deps: [
    TestAsyncServices
  ]
})
export class TestResolver implements Resolve<Observable<string[]>> {

  constructor(private testAsyncServices: TestAsyncServices) {
    console.log('*******************');
    console.log('TestResolver constructor');
    console.log(this.testAsyncServices);
    console.log('*******************');
  }

  resolve(route: ActivatedRouteSnapshot): Observable<string[]> {
    console.log('*******************');
    console.log('TestResolver resolve');
    console.log(this.testAsyncServices);
    console.log('*******************');
    return Observable.fromPromise(this.getLocalUsers());
  }

  async getLocalUsers(): Promise<string[]> {
    const vm = this;
    return new Promise<string[]>(async (resolve, rejected) => {
      // const users = await vm.testAsyncServices.getUsers();
      resolve([]);
    });
  }
}
