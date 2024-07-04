import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAndAPageComponent } from './q-and-a-page.component';

describe('QAndAPageComponent', () => {
  let component: QAndAPageComponent;
  let fixture: ComponentFixture<QAndAPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QAndAPageComponent]
    });
    fixture = TestBed.createComponent(QAndAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
