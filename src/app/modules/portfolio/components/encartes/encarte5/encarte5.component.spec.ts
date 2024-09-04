import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encarte5Component } from './encarte5.component';

describe('Encarte5Component', () => {
  let component: Encarte5Component;
  let fixture: ComponentFixture<Encarte5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encarte5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encarte5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
