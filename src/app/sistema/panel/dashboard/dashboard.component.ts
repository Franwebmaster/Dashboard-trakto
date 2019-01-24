import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {Power2, Power3, Expo, easeInOut, Bounce} from 'gsap/all';

import "gsap/CSSPlugin";
import { TweenLite, Power4 } from "gsap";
import { TweenMax } from "gsap";
import TweenMaxModule from "gsap/TweenMax";
import TweenLiteModule from "gsap/TweenLite";




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('btnExplore') btn: ElementRef;
  @ViewChild('imgTrakto') imgTrakto: ElementRef;
  @ViewChild('overlay') overlay: ElementRef;
  @ViewChild('overlayTwo') overlayTwo: ElementRef;

  @ViewChild('containerHeader') header: ElementRef;
  @ViewChild('containerP') containerP: ElementRef;
  @ViewChild('containerG') galery: ElementRef;



  public static TweenLite: typeof TweenLite = TweenLiteModule;
  public static TweenMax: typeof TweenMax = TweenMaxModule;

  constructor() { }

  ngOnInit():void {

  }

  greenSock():void {
    let timeLine = new TimelineMax({ yoyo: true});
    timeLine.to(this.btn.nativeElement, 1, {
      y: -100,
      opacity: 0
    })

    .to(this.imgTrakto.nativeElement, 2, {
      y: -400,
      opacity: 0,
      scaleX:0.8,
       z:-300,
      ease: Power3.easeInOut,
    }, "+=1")

    .from(this.overlay.nativeElement, 2, {
      ease: Power2.easeInOut
    })

    .to(this.overlay.nativeElement, 2, {
      top: "-110%",
      ease: Expo.easeInOut
    }, 2)

    .to(this.overlayTwo.nativeElement, 2, {
      top: "-110%",
      ease: Expo.easeInOut
    }, 2.5)

    .from(this.header.nativeElement, 2, {
      delay: 3.2,
      opacity: 0,
      ease: Power2.easeInOut
    })

    .to(this.header.nativeElement, 2, {
      opacity: 1,
      y: -50,
      delay: 3.2,
      ease: Power2.easeInOut
    })

    .from(this.containerP.nativeElement, 2, {
      delay: 3.9,
      opacity: 0,
      ease: Power2.easeInOut
    })

    .to(this.containerP.nativeElement, 2, {
      opacity: 1,
      y: -10,
      delay: 3.9,
      ease: Power2.easeInOut
    })

    .from(this.galery.nativeElement, 2, {
      delay: 4,
      opacity: 0,
      ease: Power2.easeInOut
    })

    .to(this.galery.nativeElement, 2, {
      opacity: 1,
      y: -20,
      delay: 4.2,
      ease: Power3.easeInOut
    });
    
  }
}