import {Component, OnInit} from '@angular/core';
import {TestAsyncServices} from '../test.async.services';

@Component({
  providers: [
    TestAsyncServices
  ],
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testAsyncService: TestAsyncServices) {
    console.log('**********************');
    console.log('TestComponent constructor');
    console.log(this.testAsyncService);
    console.log('**********************');
  }

  ngOnInit() {
    console.log('**********************');
    console.log('TestComponent ngOnInit');
    console.log(this.testAsyncService);
    console.log('**********************');
  }
}
