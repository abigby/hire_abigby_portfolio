import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [HttpClientModule],
  providers: [IconService],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss'
})
export class SvgIconComponent implements OnInit {
  @Input()
  public iconName:string = '';
  @Input()
  public iconSize:string = '2rem';
  @Input()
  public iconColor:string = 'white';
  @Input()
  public iconFolderName:string = '';

  constructor(
    private renderer2:Renderer2,
    private elementRef: ElementRef,
    private iconService:IconService
  ) { }

  public ngOnInit(): void {
    this.loadIcon();
  }

  private loadIcon():void {
    console.log("SVG ICON COMPONENT");
    this.iconService.getIcon(this.iconName, this.iconFolderName)
    .then((svgElement:HTMLElement) => {
      if (svgElement) {
        this.applyIconStyles(svgElement);
        this.elementRef.nativeElement.appendChild(svgElement);
    }
    })
  }

  private applyIconStyles(svgElement:HTMLElement):void {
    this.renderer2.setStyle(svgElement, 'width', this.iconSize);
    this.renderer2.setStyle(svgElement, 'height', this.iconSize);
    this.renderer2.setStyle(svgElement, 'fill', this.iconColor);

  }
}
