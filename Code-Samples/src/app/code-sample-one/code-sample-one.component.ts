import { Component } from '@angular/core';

@Component({
  selector: 'app-code-sample-one',
  templateUrl: './code-sample-one.component.html',
  styleUrls: ['./code-sample-one.component.scss']
})
export class CodeSampleOneComponent {
  //Component variable declarations
  csOneInputText:string = "";
  csOneOutputText:string = "";
  running:boolean = false;

  //Run text animation and assing styles/variables accordingly
  csOneRun() {
    console.log(this.csOneInputText);
    this.csOneOutputText = this.csOneInputText;
    this.running = false;
    setTimeout(() => {
      this.running = true;
    }, 100)
  }
}
