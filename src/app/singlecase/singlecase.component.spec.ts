import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecaseComponent } from './singlecase.component';

describe('SinglecaseComponent', () => {
  let component: SinglecaseComponent;
  let fixture: ComponentFixture<SinglecaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglecaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
