import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependancyComponent } from './dependancy.component';

describe('DependancyComponent', () => {
  let component: DependancyComponent;
  let fixture: ComponentFixture<DependancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
