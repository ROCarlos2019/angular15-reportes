import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorReportesComponent } from './gestor-reportes.component';

describe('GestorReportesComponent', () => {
  let component: GestorReportesComponent;
  let fixture: ComponentFixture<GestorReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorReportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
