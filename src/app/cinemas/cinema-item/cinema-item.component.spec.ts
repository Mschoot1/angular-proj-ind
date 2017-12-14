import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaItemComponent } from './cinema-item.component';

describe('CinemaItemComponent', () => {
  let component: CinemaItemComponent;
  let fixture: ComponentFixture<CinemaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
