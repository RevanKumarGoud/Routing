import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangeNotFoundComponent } from './pange-not-found.component';

describe('PangeNotFoundComponent', () => {
  let component: PangeNotFoundComponent;
  let fixture: ComponentFixture<PangeNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangeNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PangeNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
