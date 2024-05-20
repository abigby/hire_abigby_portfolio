import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioService } from '../../../services/portfolio.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [PortfolioService],
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.scss'
})
export class PortfolioDetailsComponent implements OnInit {

  public projectId:number | undefined;
  public projectDetails$?:Observable<any>;

  constructor(
    private activateRoute:ActivatedRoute,
    private portfolioService:PortfolioService
  ) { }

  public ngOnInit(): void {
    this.projectId = this.activateRoute.snapshot.params['id'];
    if(this.projectId) {
      this.projectDetails$ = this.portfolioService.getProjectById(this.projectId);
    }
  }
}
