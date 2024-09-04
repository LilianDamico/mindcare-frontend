import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encarte6Component } from './encarte6.component';

describe('Encarte6Component', () => {
  let component: Encarte6Component;
  let fixture: ComponentFixture<Encarte6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encarte6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encarte6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
