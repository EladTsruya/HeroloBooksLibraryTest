import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistenceMessageComponent } from './existence-message.component';

describe('ExistenceMessageComponent', () => {
  let component: ExistenceMessageComponent;
  let fixture: ComponentFixture<ExistenceMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistenceMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistenceMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
