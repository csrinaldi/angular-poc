import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestAsyncServices} from './test.async.services';
import {TestComponent} from './test-component/test.component';
import {TestResolver} from './test.resolver';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestComponent
  ]
})
export class TestModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TestModule,
      providers: [
        {
          provide: TestAsyncServices,
          /*useFactory: async (dbservice: IndexedDBService) => {
              console.log('UsersModule.useFactory')
              let a = await (async () => {
                  console.log('Antes de crear la instancia');
                  const instance = await setup(dbservice);
                  console.log('Instancia creada');
                  return instance;
              })();
              console.log('--------------------');
              console.log(a);
              console.log('---------------------');
              return a;
          },*/
          useFactory: () => {
            console.log('useFactory')
            return () => {
              console.log('Factory TestAsyncServices');
              return new Promise<TestAsyncServices>(async (resolve) => {
                const instance = new TestAsyncServices();
                await instance.setup();
                resolve(instance);
              });
            };
          },
          deps: []
        },

        TestResolver
      ]
    };
  }
}
