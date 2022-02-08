import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedListComponent } from './red-list.component';

describe('RedListComponent', () => {
  let component: RedListComponent;
  let fixture: ComponentFixture<RedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
