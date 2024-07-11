import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DisplayService } from '../../service/display.service';


@Component({
  selector: 'codebyteai-from-event',
  standalone: true,
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})


export class FromEventComponent implements OnInit {
  constructor(private _display: DisplayService) { }
  @ViewChild('mybtn') mybtn: ElementRef | undefined;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let count = 0;
    fromEvent(this.mybtn?.nativeElement, 'click').subscribe(res => {
      let sample = 'video' + count++
      this._display.dispay(sample, 'mycontainer');
    })
  }
}
