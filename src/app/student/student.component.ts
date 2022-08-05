import { Component, EventEmitter, Output,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


@Input() TodayWork!:string;

@Output() myOutput:EventEmitter<string>=new EventEmitter();


Outmsg:string="hi! am child component";
  constructor() { }

  ngOnInit(): void {

console.log(this.TodayWork);
this.myOutput.emit(this.Outmsg);

  }
  /*
  SendValues(){
this.myOutput.emit(this.Outmsg);



  }
*/


}
