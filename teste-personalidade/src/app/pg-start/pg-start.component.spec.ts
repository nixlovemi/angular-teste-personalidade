import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgStartComponent } from './pg-start.component';

describe('PgStartComponent', () => {
  let component: PgStartComponent;
  let fixture: ComponentFixture<PgStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
