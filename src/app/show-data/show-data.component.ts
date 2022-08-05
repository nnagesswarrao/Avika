import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.service';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

emp:Employee[]=[];



  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {

this.emp=this.empService.GetData()//subscribe((data:any) =>{ this.emp=data});


  }

}
