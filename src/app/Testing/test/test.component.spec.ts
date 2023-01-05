import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let h1=HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations:[TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    h1=fixture.nativeElement.querySelector('h1'); 
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(h1.name).toContain(component.title);
  });
});
