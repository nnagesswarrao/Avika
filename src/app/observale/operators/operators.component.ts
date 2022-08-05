import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray } from '@angular/forms';
import { debounceTime, from ,fromEvent,map, of,filter } from 'rxjs';
//import { fromArray } from "rxjs/internal/observable/fromArray";
@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
 
  constructor() { }
//map operator
/*observable=from([1,2,3,4]).pipe(map(val=>{
return val*8
})); // this only one argument*/
/*
@ViewChild('btn', {static:true}) button!:ElementRef;
//two arguments
observable=from([1,2,3,4]).pipe(map((val,i)=>{
  console.log(i);
  return val*2;
  }));

Subscribe(){

this.observable.subscribe(val=>{console.log(val)});


}
*/
/*
observable=from([{fname:"nnagesswarrao", lName:"Sivakoti"},{fname:"aviaka",lName:"sivakoti"},{fname:"arjun",lName:"sivakoti"}]).pipe(map((val,i)=>{
  console.log(i);
  return  val.fname.toUpperCase();// val.fname+" "+val.lName;
  }));

Subscribe(){

fromEvent(this.button.nativeElement,'click').pipe(map(data=> (data as any).clientX),debounceTime(300)).subscribe(val=>{console.log(val)},error=>{},()=>{console.log("process completd")});


}

*/


//filter
values=[{name:"nnagesswararo", age:26, phone:9515302024},{name:"aviaka",age:1,phone:9000919041},{nameL:"arjun", age:1,phone:9515302024}]
obs=from(this.values);
//obs=of(1,2,3,4,5,6,7,8,9,10)


Subscribe(){
this.obs.pipe(filter(val=>{return val.age>18 && val.phone==9515302024 })).subscribe(val=>{console.log(val)});

}

  ngOnInit(): void {
    this.Subscribe();
  }

}
