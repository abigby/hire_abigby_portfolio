import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [PortfolioService],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  public allProjects$?:Observable<any>;

  constructor(
    private portfolioService: PortfolioService
  ) { }

  public ngOnInit():void {
    this.allProjects$ = this.portfolioService.getAllProjects();
  }

}
