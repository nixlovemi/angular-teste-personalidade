import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgFinishComponent } from './pg-finish.component';

describe('PgFinishComponent', () => {
  let component: PgFinishComponent;
  let fixture: ComponentFixture<PgFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
