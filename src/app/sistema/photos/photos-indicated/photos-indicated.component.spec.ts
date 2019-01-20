import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosIndicatedComponent } from './photos-indicated.component';

describe('PhotosIndicatedComponent', () => {
  let component: PhotosIndicatedComponent;
  let fixture: ComponentFixture<PhotosIndicatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosIndicatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosIndicatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
