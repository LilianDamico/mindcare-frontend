import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encarte2Component } from './encarte2.component';

describe('Encarte2Component', () => {
  let component: Encarte2Component;
  let fixture: ComponentFixture<Encarte2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encarte2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encarte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
