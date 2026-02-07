import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementComponent } from './equipement.component';

describe('EquipementComponent', () => {
  let component: EquipementComponent;
  let fixture: ComponentFixture<EquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipementComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
