import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, of } from 'rxjs';
import * as Helper from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private cache: { [key:string]: any } = {};

  constructor(
    private httpClient:HttpClient
  ) { }

  public getIcon(iconName:string, iconFolderPath:string):any {
    if(this.cache[iconName]) {
      return Promise.resolve(this.cache[iconName].cloneNode(true) as SVGElement)
    }

    const iconPath = `${iconFolderPath}${iconName}.svg`;
    console.log("ICONPATH: ", iconPath);

    return firstValueFrom(
      this.httpClient.get(iconFolderPath, {
        responseType: 'text'
      })
      .pipe(
        map((svgText) => {
          const svgElement = document.createElement('div');
          svgElement.innerHTML = svgText;

          const icon = svgElement.querySelector('svg');

          // if(icon) {
            console.log("ICON!!")
            this.cache[iconName] = icon;
            return icon?.cloneNode(true) as SVGElement;
          // } 
          // else {
          //   return null;
          // }

        }),
        catchError(
          (error) => {
            console.error(`Failed to load SVG icon '${iconName}':`, error);
            return of(null);
          }
        )
      ),
    )
  }
}
