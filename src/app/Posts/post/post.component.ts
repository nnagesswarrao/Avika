import { Component, OnInit } from '@angular/core';
import { Observable,filter } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from './Post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

//Mynumber:any;

Loading:boolean=false;
loading:boolean=false;
//Emp:Post[]=[];
Emp:any;
//posts = new Array<Post[]>();
    id!:number;
name!:string;
depart!:string;
phone!:number;
  constructor(private _post:PostService) { }
Username:string="Arjun";
//Value:string="text";
  ngOnInit(): void {


//this.GetAll();pipe(filter(data=>{return data.id>2 && data.phone==9515302024}))


  }

Hide(){

this.Loading=false;
this.loading=false;

}
GetAll(){
  
  this.Loading=true;
  this.loading=false;
this._post.getAll().subscribe(val=>{this.Emp=val});


}
 
Search(){
//debugger
this.Loading=true;
this.loading=false;
this._post.FindName(this.Username).subscribe(val=>{

this.Emp=val}

);

};

Add(){

this.loading=true;
this.Loading=false;


}

SubmitData(){


this.Emp={
id:this.id,
name:this.name,
depart:this.depart,
phone:this.phone
};





this._post.Add(this.Emp).subscribe(data=>{

console.log(data);

});

this.GetAll();
}

UpDate(id:any,name:any,depart:any,phone:any){
this.Add();
  this.Emp={
    id:this.id,
    name:this.name,
    depart:this.depart,
    phone:this.phone
    };
    //this.id,this.name,this.depart,this.phone
    this._post.UpdateOne(this.Emp, this.id).subscribe(data=>{

      console.log(data);
    });
    
    
}

Remove(id:any){

this._post.DeleteId(id).subscribe(data=>{

console.log(data);

});
  this.GetAll();
}

}
/*


map(item=>{

return new Post(

item.body,
item.id,
item.title,item.userId


);


});
});


*/ 