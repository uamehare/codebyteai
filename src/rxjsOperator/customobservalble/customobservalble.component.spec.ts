import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomobservalbleComponent } from './customobservalble.component';

describe('CustomobservalbleComponent', () => {
  let component: CustomobservalbleComponent;
  let fixture: ComponentFixture<CustomobservalbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomobservalbleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomobservalbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
