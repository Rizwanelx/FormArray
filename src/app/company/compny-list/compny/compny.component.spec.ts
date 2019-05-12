import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnyComponent } from './compny.component';

describe('CompnyComponent', () => {
  let component: CompnyComponent;
  let fixture: ComponentFixture<CompnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
