import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { DisplayService } from '../../service/display.service';


@Component({
  selector: 'codebyteai-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit {

  constructor(private _display: DisplayService) {}
  ngOnInit(): void {
    const sample1 = timer(5000, 1000)
    sample1.subscribe(res => {
      let timerdata = 'video' + res
      this._display.dispay(timerdata, 'timercontainer')
    })
  }
}
