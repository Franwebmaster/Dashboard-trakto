import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotosInspiredComponent } from './photos-inspired/photos-inspired.component';
import { PhotosComponent } from './photos-inspired/photos/photos.component';
import { AllCuratedComponent } from './all-curated/all-curated.component';
import { PhotosCuratedComponent } from './all-curated/photos-curated/photos-curated.component';
import { LoadButtonComponent } from './all-curated/load-button/load-button.component';
import { PhotosIndicatedComponent } from './photos-indicated/photos-indicated.component';
import { PhotosIndicatedCuratedComponent } from './photos-indicated/photos-indicated-curated/photos-indicated-curated.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotosInspiredComponent,
    PhotosComponent,
    AllCuratedComponent,
    PhotosCuratedComponent,
    LoadButtonComponent,
    PhotosIndicatedComponent,
    PhotosIndicatedCuratedComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PhotoComponent,
    PhotosInspiredComponent,
    PhotosComponent,
    AllCuratedComponent,
    PhotosCuratedComponent,
    LoadButtonComponent,
    PhotosIndicatedComponent,
    PhotosIndicatedCuratedComponent
  ]
})
export class PhotosModule { }
