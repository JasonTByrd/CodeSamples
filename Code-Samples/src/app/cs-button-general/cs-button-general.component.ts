import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cs-button-general',
  templateUrl: './cs-button-general.component.html',
  styleUrls: ['./cs-button-general.component.scss']
})
export class CsButtonGeneralComponent {
  @Input() text:string = "";
}
