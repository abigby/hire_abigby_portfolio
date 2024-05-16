import { Component } from '@angular/core';
import { LoaderComponent } from '../../../components/loader/loader.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LoaderComponent],
  providers: [NgxSpinnerService],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
