import { Injectable } from '@angular/core';
  export interface Employee{

name:string,
id:number,
Phone:number,City:string

  }
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



employee:Employee[]=[
  {

  name:'nnagesswarrao',
  id:1,
  Phone:9515302024,City:'Srungavaram'

},
{

  name:'shekar',
  id:2,
  Phone:7989569092,City:'Rajahmundry'

},
{

  name:'Ramu',
  id:3,
  Phone:900019041,City:'Rajahmundry'

},

];
constructor() { }

GetData(){

return this.employee;

}


}
