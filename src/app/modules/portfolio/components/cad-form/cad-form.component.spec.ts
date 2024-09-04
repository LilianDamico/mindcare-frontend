import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFormComponent } from './cad-form.component';

describe('CadFormComponent', () => {
  let component: CadFormComponent;
  let fixture: ComponentFixture<CadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
