import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-code-sample-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './code-sample-one.component.html',
  styleUrls: ['./code-sample-one.component.scss']
})
export class CodeSampleOneComponent implements OnChanges {
  @Input() 
  csOneInputText:string = "";

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
