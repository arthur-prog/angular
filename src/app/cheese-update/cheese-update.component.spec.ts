import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseUpdateComponent } from './cheese-update.component';

describe('CheeseUpdateComponent', () => {
  let component: CheeseUpdateComponent;
  let fixture: ComponentFixture<CheeseUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheeseUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
