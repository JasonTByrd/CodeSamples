import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeSampleOneComponent } from '../code-sample-one/code-sample-one.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { CsButtonGeneralComponent } from '../cs-button-general/cs-button-general.component';
import { MatIconModule } from '@angular/material/icon';

describe('CodeSampleOneComponent', () => {
  let component: CodeSampleOneComponent;
  let fixture: ComponentFixture<CodeSampleOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CodeSampleOneComponent,
        CsButtonGeneralComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatIconModule
      ]
    });
    fixture = TestBed.createComponent(CodeSampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading text', () => {
    const fixture = TestBed.createComponent(CodeSampleOneComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.cs-one h2')?.textContent).toContain('UI Code Sample');
  });

  it('Test button click and function run', fakeAsync(() => {
    spyOn(component, 'csOneRun');
    fixture.debugElement.nativeElement.querySelector('button').click();
    tick();
    expect(component.csOneRun).toHaveBeenCalled();
  }));
});
