import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayService } from '../../service/display.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'codebyteai-customobservalble',
  standalone: true,
  imports: [NgClass],
  templateUrl: './customobservalble.component.html',
  styleUrl: './customobservalble.component.scss'
})
export class CustomobservalbleComponent implements OnInit {

  mypropert: string = '';

  constructor(private _display: DisplayService) { }
  ngOnInit(): void {
    const customobserv = new Observable(obsever => {
      obsever.next('angular');
      obsever.next('java')
      // obsever.complete();
      obsever.next('html')
      obsever.error(new Error('the new error'))
      obsever.next('typescript')
    })
    customobserv.subscribe(res => {
      console.log(res)
      this._display.dispay(res, 'customcontainer')
    },
      (error) => {
        this.mypropert = 'error'
      }, () => {
        console.log('completed')
        this.mypropert = 'completed'
        console.log('this is my class', this.mypropert)
      }


    )

  }


}
