import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.mat-drawer-content').slimScroll({
        height: 'auto',
        color: '#000',
        size: '5px',
      });
    }, 0);
  }

}
