import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAQuestionComponent } from './ask-aquestion.component';

describe('AskAQuestionComponent', () => {
  let component: AskAQuestionComponent;
  let fixture: ComponentFixture<AskAQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskAQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskAQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
