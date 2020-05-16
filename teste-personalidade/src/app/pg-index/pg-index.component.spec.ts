import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgIndexComponent } from './pg-index.component';

describe('PgIndexComponent', () => {
  let component: PgIndexComponent;
  let fixture: ComponentFixture<PgIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
