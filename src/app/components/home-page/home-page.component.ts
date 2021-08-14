import { Component, OnInit } from '@angular/core';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // width: any;
  // height: any;
  myObjArray = [{
    width: '800',
    height: '200',
  }];
  myObjSliced =  [{
    width: '800',
    height: '200',
  }];

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < 9; i++){
      this.myObjArray.push({
        width: (Math.random() * (1000 - 500) + 500).toFixed(),
        height: (Math.random() * (1000 - 200) + 200).toFixed(),
      });
    }
    this.myObjSliced = this.myObjArray.slice(0, 8);
  }
  numSeq(n: number): Array<number> {
    return Array(n);
  }


}
