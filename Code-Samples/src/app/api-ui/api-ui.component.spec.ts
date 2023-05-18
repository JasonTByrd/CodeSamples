import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUiComponent } from './api-ui.component';

describe('ApiUiComponent', () => {
  let component: ApiUiComponent;
  let fixture: ComponentFixture<ApiUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiUiComponent]
    });
    fixture = TestBed.createComponent(ApiUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    const fixture = TestBed.createComponent(ApiUiComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.api-ui-cont')?.textContent).toContain('Basic API Access Tools');
  });
});
