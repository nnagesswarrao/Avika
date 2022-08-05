import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
    

ClassWork:string="Today Maths Home work";

OutMsg!:string
  constructor() { }

  ngOnInit(): void {
  }



  getData(data:any){


//this.OutMsg=data;



console.log(data);
}

}
