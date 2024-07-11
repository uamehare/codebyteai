import { Component, OnInit } from '@angular/core';
import { interval, take, toArray } from 'rxjs';

@Component({
  selector: 'codebyteai-to-array',
  standalone: true,
  imports: [],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent implements OnInit{
  ngOnInit(): void {
    let myarraylist = interval(1000)

    myarraylist.pipe(take(5),toArray()).subscribe(res=>{
      console.log(res)
    })
  }



}
