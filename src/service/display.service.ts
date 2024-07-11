import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  dispay(value: any, container: any) {
    let el = document.createElement('li');
    el.innerHTML = value;
    document.getElementById(container)?.append(el)
  }
  
}
