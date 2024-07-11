import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { DisplayService } from '../../service/display.service';

@Component({
  selector: 'codebyteai-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  constructor(private _display: DisplayService) { }
  ngOnInit(): void {
    let mylist = interval(2000);
    let mapdata;
    mylist.pipe(map(data => 'video ' + data)).subscribe(res => {
      console.log(res)
      mapdata = res
      this._display.dispay(mapdata, 'mapconatainer')
    })
  }



}
