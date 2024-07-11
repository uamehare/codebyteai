import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { DisplayService } from '../../service/display.service';



@Component({
  selector: 'codebyteai-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent implements OnInit {

  constructor(private _display:DisplayService){}



  ngOnInit(): void {
    
    const sample = interval(2000)
    sample.subscribe(res=>{
     console.log(res)
     let mydisplay = 'video' + res;
     this._display.dispay(mydisplay, 'myconatiner')

    })



  }





}
