import { Component } from '@angular/core';

@Component({
  selector: 'app-code-sample-one',
  templateUrl: './code-sample-one.component.html',
  styleUrls: ['./code-sample-one.component.scss']
})
export class CodeSampleOneComponent {
  csOneInputText:string = "";
  csOneOutputText:string = "";
  running:boolean = false;

  onChanges() {
    //console.log(this.csOneInputText);
  }

  csOneRun() {
    console.log(this.csOneInputText);
    this.csOneOutputText = this.csOneInputText;
    this.running = false;
    setTimeout(() => {
      this.running = true;
    }, 100)
  }
}
