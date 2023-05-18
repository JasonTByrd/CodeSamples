import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSampleOneComponent } from './code-sample-one.component';

describe('CodeSampleOneComponent', () => {
  let component: CodeSampleOneComponent;
  let fixture: ComponentFixture<CodeSampleOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeSampleOneComponent]
    });
    fixture = TestBed.createComponent(CodeSampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    const fixture = TestBed.createComponent(CodeSampleOneComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.api-ui-cont')?.textContent).toContain('UI Code Sample');
  });
});
