import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  public sidenav!: MatSidenav;
  
  constructor(
    private breakPointObserver: BreakpointObserver
  ) {}

  public ngAfterViewInit(): void {

  }
}
