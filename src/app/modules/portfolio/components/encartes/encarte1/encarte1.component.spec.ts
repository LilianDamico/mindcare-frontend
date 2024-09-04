import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encarte1Component } from './encarte1.component';

describe('Encarte1Component', () => {
  let component: Encarte1Component;
  let fixture: ComponentFixture<Encarte1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encarte1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encarte1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
