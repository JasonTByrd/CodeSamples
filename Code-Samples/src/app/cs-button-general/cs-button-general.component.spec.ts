import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsButtonGeneralComponent } from './cs-button-general.component';

describe('CsButtonGeneralComponent', () => {
  let component: CsButtonGeneralComponent;
  let fixture: ComponentFixture<CsButtonGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsButtonGeneralComponent]
    });
    fixture = TestBed.createComponent(CsButtonGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button text', () => {
    const fixture = TestBed.createComponent(CsButtonGeneralComponent);
    fixture.componentInstance.text = "Run";
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain(fixture.componentInstance.text);
  });
});
