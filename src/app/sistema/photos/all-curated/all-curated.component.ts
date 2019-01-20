import { Component, OnInit } from '@angular/core';

import { AroundService } from './../../services/photo-around/around.service';
import { Photo } from '../photo/photo';
import { AllCuratedService } from '../../services/photo-curated/all-curated.service';

@Component({
  selector: 'app-all-curated',
  templateUrl: './all-curated.component.html',
  styleUrls: ['./all-curated.component.scss']
})
export class AllCuratedComponent implements OnInit {

  photos: Photo[] = [];
  hasMore: boolean = true;
  currentPage: number = 1;
  page:number = 1;

  constructor(private AllAroudSerive: AroundService, private AllCurated: AllCuratedService) { }

  ngOnInit() {
    this.AllAroudSerive.getAroundPhotos()
    .subscribe( Curated => {
      console.log(Curated);
      this.photos = Curated;
    },
    error => {
      console.log(error);
      
    })
  }

  load() {
    this.AllCurated.getPhotoPaginated(++this.page)
    .subscribe( photos => {
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore= false;
    },
    error =>{
      console.log(error);
    })
  }

}
