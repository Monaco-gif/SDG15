import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrestrialComponent } from './terrestrial.component';

describe('TerrestrialComponent', () => {
  let component: TerrestrialComponent;
  let fixture: ComponentFixture<TerrestrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrestrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrestrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
