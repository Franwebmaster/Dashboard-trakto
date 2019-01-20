import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCuratedComponent } from './all-curated.component';

describe('AllCuratedComponent', () => {
  let component: AllCuratedComponent;
  let fixture: ComponentFixture<AllCuratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCuratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCuratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
