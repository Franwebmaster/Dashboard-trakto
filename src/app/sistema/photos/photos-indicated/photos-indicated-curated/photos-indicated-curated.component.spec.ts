import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosIndicatedCuratedComponent } from './photos-indicated-curated.component';

describe('PhotosIndicatedCuratedComponent', () => {
  let component: PhotosIndicatedCuratedComponent;
  let fixture: ComponentFixture<PhotosIndicatedCuratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosIndicatedCuratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosIndicatedCuratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
