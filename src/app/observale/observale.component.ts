import { KeyValuePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observale',
  templateUrl: './observale.component.html',
  styleUrls: ['./observale.component.css']
})
export class ObservaleComponent implements AfterViewInit, OnInit, OnDestroy {


  @ViewChild('btn', { static: true }) 
button!: ElementRef;

@ViewChild('name',{static:false}) name!:ElementRef;
//constructor(private elm:ElementRef) { }
Mysubscription:any;
Values:string='text';
buttonClick(){

this.Mysubscription=fromEvent(this.button.nativeElement,'click').pipe(debounceTime(300)).subscribe(val=>{console.log(val)});


}

ngAfterViewInit(){
this.buttonClick();
this.scrol();

fromEvent(this.name.nativeElement,'keyup').pipe(debounceTime(300)).subscribe(val=>{console.log(val)}, error=>{},()=>{console.log('completed')});



}

ngOnInit(): void {
  
  //this.Subscribe();
  //this.buttonClick();
  
    }


    scrol(){

fromEvent(window, 'scroll').subscribe(val=>{
  console.log(val)
})












    }
    ngOnDestroy(): void {
      
      this.Mysubscription.unsubscribe();
    }
/*

//collection 
//Mymap.set(0,'Hello')
Subscribe(){

  let Mymap =new Map();

  Mymap.set(0,'Hello')
  Mymap.set(1,'Hello')
  Mymap.set(2,'Hello')
  const obs=from(Mymap);

  obs.subscribe(val=>{console.log(val);},error=>{},()=>{console.log("completed")})
  
  
  }
*/


  /*

//from 
//MyArray1:number[]=[1,2,3,4,5];

obs=from("Heelo World");


Subscribe(){

this.obs.subscribe(val=>{console.log(val);},error=>{},()=>{console.log("completed")})


}

*/





//by using of
/*
MyArray1:number[]=[1,2,3,4,5];
MyArray2:string[]=["NNAGESSWARRAO","Avika","arjun"];
Obs=of(this.MyArray1,100, "Hello WORLD",this.MyArray2);

Subscribe(){

this.Obs.subscribe(val=>{console.log(val);},error=>{console.log(error);},()=>{console.log('completed');});



}

*/






//by Obervale
/*
  MyObervale= Observable.create((observer:any)=>{   /// MyObersver =new Observable(()=>{});

console.log('Observer start')

setTimeout(()=>{observer.next('1')},0);
//setTimeout(()=>{observer.complete()},4000);
//setTimeout(()=>{observer.error()},4000);
setTimeout(()=>{observer.next('2')},1000);
setTimeout(()=>{observer.next('3')},5000);
setTimeout(()=>{observer.next('4')},8000);
/*
observer.next('1')
observer.next('2')
observer.error()
//observer.complete()
observer.next('3')
observer.next('4')

})*/



/*
Subscribe(){


this.MyObervale.subscribe((val:any)=>{
console.log(val);}, (error:any)=>{console.log("This is error");}, ()=>{console.log("completed");}
);



}
*/
/*Subscribe(){


this.MyObervale.subscribe((val)=>{
console.log(val);}, (error)=>{console.log("This is error");}, ()=>{console.log("completed");}
);*/ 


 


  
}
