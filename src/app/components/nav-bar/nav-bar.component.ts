import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isOpen = false;
  // @HostListener('window:scroll', ['$event'])

  // tslint:disable-next-line:typedef
  // onWindowScroll() {
  //   const element =  document.querySelector('.navbar') as HTMLElement;
  //   if (window.pageYOffset > 2) {
  //     element.classList.add('bg-dark');
  //     // element.classList.remove('bg-darks');
  //     this.isOpen = false;
  //     console.log('scolled', this.isOpen);
  //   } else {
  //     element.classList.remove('bg-dark');
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  // clicked() {
  //   const element =  document.querySelector('.navbar') as HTMLElement;
  //   if (!this.isOpen) {
  //     element.classList.add('bg-dark');
  //     console.log('is open', !this.isOpen);
  //   }
  //   else {
  //   }
  // }
}
