import {Component, OnInit} from '@angular/core';
import {TestAsyncServices} from '../test.async.services';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testAsyncService: TestAsyncServices) {
  }

  ngOnInit() {

    console.log('**********************');
    console.log('TestComponent ngOnInit');
    console.log(this.testAsyncService);
    console.log('**********************');

  }

}
