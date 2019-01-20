import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosInspiredComponent } from './photos-inspired.component';

describe('PhotosInspiredComponent', () => {
  let component: PhotosInspiredComponent;
  let fixture: ComponentFixture<PhotosInspiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosInspiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosInspiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
