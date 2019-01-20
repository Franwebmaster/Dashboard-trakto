import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/photo';
import { AroundService } from './../../services/photo-around/around.service';

@Component({
  selector: 'app-photos-inspired',
  templateUrl: './photos-inspired.component.html',
  styleUrls: ['./photos-inspired.component.scss']
})
export class PhotosInspiredComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private AroudService: AroundService) { }

  ngOnInit() {
    this.AroudService.getAroundPhotos()
    .subscribe( Around => {
      console.log(Around);
      this.photos = Around;
    },
    error => {
      console.log(error);
    })
  }

}
