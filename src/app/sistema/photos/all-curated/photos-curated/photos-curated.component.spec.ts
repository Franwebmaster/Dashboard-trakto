import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosCuratedComponent } from './photos-curated.component';

describe('PhotosCuratedComponent', () => {
  let component: PhotosCuratedComponent;
  let fixture: ComponentFixture<PhotosCuratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosCuratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosCuratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
