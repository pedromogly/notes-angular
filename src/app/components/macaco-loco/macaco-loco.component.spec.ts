import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacacoLocoComponent } from './macaco-loco.component';

describe('MacacoLocoComponent', () => {
  let component: MacacoLocoComponent;
  let fixture: ComponentFixture<MacacoLocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacacoLocoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacacoLocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
