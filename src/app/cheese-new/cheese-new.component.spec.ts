import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseNewComponent } from './cheese-new.component';

describe('CheeseNewComponent', () => {
  let component: CheeseNewComponent;
  let fixture: ComponentFixture<CheeseNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheeseNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
