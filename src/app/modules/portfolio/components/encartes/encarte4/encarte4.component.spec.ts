import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encarte4Component } from './encarte4.component';

describe('Encarte4Component', () => {
  let component: Encarte4Component;
  let fixture: ComponentFixture<Encarte4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encarte4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encarte4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
