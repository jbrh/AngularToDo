// This component was added for Step 16
import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  SimpleChanges,
  AfterContentInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy {
  order: number = 1;

  @Input() lifecycletext: string;

  constructor() {
    console.log(
      'This is the constructor() and my firing order is: ' + this.order
    );
    this.order++;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      'This is the ngOnChanges() event and my firing order is: ' + this.order
    );
    this.order++;
  }

  ngOnInit() {
    console.log(
      'This is the ngOnInit() event and my firing order is: ' + this.order
    );
    this.order++;
  }

  ngDoCheck() {
    console.log(
      'This is the ngDoCheck() event and my firing order is: ' + this.order
    );
    this.order++;
  }

  ngAfterContentInit() {
    console.log(
      'This is the ngAfterContentInit() event and my firing order is: ' +
        this.order
    );
    this.order++;
  }

  ngAfterContentChecked() {
    console.log(
      'This is the ngAfterContentChecked() event and my firing order is: ' +
        this.order
    );
    this.order++;
  }

  ngAfterViewInit() {
    console.log(
      'This is the ngAfterViewInit() and my firing order is: ' + this.order
    );
    this.order++;
  }

  ngAfterViewChecked() {
    console.log(
      'This is the ngAfterViewChecked() and my firing order is: ' + this.order
    );
    this.order++;
  }

  ngOnDestroy() {
    console.log(
      'This is the ngOnDestroy() and my firing order is: ' + this.order
    );
    this.order++;
  }
}