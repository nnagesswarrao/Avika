import { Component, OnInit } from '@angular/core';
import { Observable, pipe  } from 'rxjs';
import { filter,map,tap } from 'rxjs/operators';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  //data!: number;

customPipe=pipe(tap(data=>{console.log('tap first:'+data)}),/*filter(),*/map(val=>{return val as number+3}),tap(data=>{console.log('Final:'+data)}));

//standed alone

MyObservable=new Observable(observer=>{
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.next(4)
  observer.next(5)
  observer.complete()
  }).pipe(this.customPipe, map(val=>{return val as number*8}));

//pipe as instace method
/*
MyObservable=new Observable(observer=>{
observer.next(1)
observer.next(2)
observer.next(3)
observer.next(4)
observer.next(5)
observer.complete()
}).pipe(
  //filter((data):any=>{this.data>2    //console.log(data)}),
  tap(data=>{console.log('tap:'+data)}),map(val=>{return val as number*2}),tap(val=>{console.log('final:'+val)}));
  

*/
Subscribe(){


this.MyObservable.subscribe(val=>{console.log(val)},error=>{},()=>{console.log("completed")});

}







  constructor() { }

  ngOnInit(): void {
    this.Subscribe();
  }

}
