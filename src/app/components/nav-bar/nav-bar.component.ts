import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])

  // tslint:disable-next-line:typedef
  onWindowScroll() {
    const element =  document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-dark');
      console.log('scolled');
    } else {
      element.classList.remove('bg-dark');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
