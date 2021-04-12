import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainInfoComponent } from './main-info.component';

describe('MainInfoComponent', () => {
  let component: MainInfoComponent;
  let fixture: ComponentFixture<MainInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
