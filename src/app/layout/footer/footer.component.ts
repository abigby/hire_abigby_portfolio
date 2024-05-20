import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  public currentYear:number = new Date().getFullYear();
  public isHomeRoute:boolean = false;

  constructor(
    public router:Router,
    public activatedRoute:ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.router.events.subscribe(
      (value) => {
        if(value instanceof NavigationEnd) {
          console.log(value?.url);
          switch(value?.url) {
            case '/':
              this.isHomeRoute = true;
              break;
            case '/home':
              this.isHomeRoute = true;
              break;
            default: 
              this.isHomeRoute = false;
          }
        }
        
      }
    )
    
  }
}
