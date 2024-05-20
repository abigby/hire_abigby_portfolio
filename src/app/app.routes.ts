import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'home', 
        title:"Hire Andrew Bigby", 
        loadComponent:() => import('./pages/home/home.component').then(
            (m) => m.HomeComponent
        )
    },
    { 
        path: 'projects', 
        title:"AB Projects", 
        loadComponent:() => import('./pages/portfolio/portfolio.component').then(
            (m) => m.PortfolioComponent
        )
    },
    { 
        path: 'project/:id', 
        title:"AB Project Details", 
        loadComponent:() => import('./pages/portfolio/portfolio-details/portfolio-details.component').then(
            (m) => m.PortfolioDetailsComponent
        )
    },
    { 
        path: 'resume', 
        title:"AB Resume", 
        loadComponent:() => import('./pages/resume/resume.component').then(
            (m) => m.ResumeComponent
        )
    },
    {
        path:'', 
        pathMatch: 'full', 
        title:"Hire Andrew Bigby",
        redirectTo:'home'
    },
];
