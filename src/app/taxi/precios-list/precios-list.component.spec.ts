import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosListComponent } from './precios-list.component';

describe('PreciosListComponent', () => {
  let component: PreciosListComponent;
  let fixture: ComponentFixture<PreciosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreciosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreciosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
