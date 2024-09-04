import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encarte3Component } from './encarte3.component';

describe('Encarte3Component', () => {
  let component: Encarte3Component;
  let fixture: ComponentFixture<Encarte3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encarte3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encarte3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
