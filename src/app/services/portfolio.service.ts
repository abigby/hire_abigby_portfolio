import { Injectable } from '@angular/core';
import { Observable, filter, flatMap, mergeMap, of, reduce, tap } from 'rxjs';
import { TECH_STACK } from '../database/portfolio-tech-stack';
import { PORTFOLIO_PROJECTS } from '../database/portfolio-projects';
import { flatten } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public projectsJson:any = of(TECH_STACK);
  
  constructor() {  }

  public getAllSkills():Observable<Array<any>> {
    return of(TECH_STACK);
  }

  public getAllProjects():Observable<Array<any>> {
    return of(PORTFOLIO_PROJECTS);
  }

  public getProjectById(id:number):Observable<Array<any>> {
    return of(PORTFOLIO_PROJECTS.filter((project) => {
      return project.id == id
    }));
    
  }
}
