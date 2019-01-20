import { Component, OnInit } from '@angular/core';

import { AllCuratedService } from './../../services/photo-curated/all-curated.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photos-indicated',
  templateUrl: './photos-indicated.component.html',
  styleUrls: ['./photos-indicated.component.scss']
})
export class PhotosIndicatedComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private CuratedPhotos: AllCuratedService) { }

  ngOnInit() {
    this.CuratedPhotos.getAllCurated()
    .subscribe( Curated => {
      console.log(Curated);
      this.photos = Curated;
    })
  }

}
