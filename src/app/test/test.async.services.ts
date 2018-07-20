import {Injectable} from '@angular/core';

/**
 * Services with asyncronous setup
 *
 * @author Cristian Rinaldi
 */
@Injectable()
export class TestAsyncServices {

  constructor() {
  }

  /**
   * Realiza el setup asincrónico de la base de datos.
   */
  setup(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
  }

  getUsers(): Promise<string[]> {
    return new Promise<string[]>(async (resolve, rejected) => {
      resolve(['1', '2', '3', '4']);
    });
  }
}
