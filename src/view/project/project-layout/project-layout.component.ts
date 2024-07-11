import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'codebyteai-project-layout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-layout.component.html',
  styleUrl: './project-layout.component.scss'
})
export class ProjectLayoutComponent {
  constructor(private my : Router){

  }

  transfer(){
  this.my.navigate(['/project1'])
  }

}
