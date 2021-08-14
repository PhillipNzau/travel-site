import { Component, OnInit } from '@angular/core';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  width: any;
  height: any;

  constructor() { }

  ngOnInit(): void {


  }

  numSeq(n: number): Array<number> {

    return Array(n);
  }
  dimSeq(n: number): Array<number> {

    console.log('ran', this.width);
    return Array(n);
  }

}
