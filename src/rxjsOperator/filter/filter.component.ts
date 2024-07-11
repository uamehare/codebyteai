import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {NgFor} from '@angular/common';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'codebyteai-filter',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  
  data:any;
  filterarray = 
    [
      { "id": 1, "name": "Alice", "gender": "Female" },
      { "id": 2, "name": "Bob", "gender": "Male" },
      { "id": 3, "name": "Carol", "gender": "Female" },
      { "id": 4, "name": "David", "gender": "Male" },
      { "id": 5, "name": "Eve", "gender": "Female" },
      { "id": 6, "name": "Frank", "gender": "Male" },
      { "id": 7, "name": "Grace", "gender": "Female" },
      { "id": 8, "name": "Hankpank", "gender": "Male" },
      { "id": 9, "name": "Ivy", "gender": "Female" },
      { "id": 10, "name": "Jack", "gender": "Male" }
  ]
  
  
  ngOnInit(): void {
   let myarray = from(this.filterarray)

   myarray.pipe(filter(data => data.gender == 'Male'),toArray(), ).subscribe(res=>{
    console.log(res)
    this.data=res;
   })
  }


}
