import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Posts/post.service';
import { Post } from '../Posts/post/Post';
@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.component.html',
  styleUrls: ['./full-details.component.css']
})
export class FullDetailsComponent implements OnInit {

  constructor(private _post:PostService,private _ActivatedRoute:ActivatedRoute) { }
  id!:any;
  Emp:Post[]=[];
  ngOnInit(): void {

    this.MyMethod();
  }

  MyMethod(){

    this.id =this._ActivatedRoute.snapshot.paramMap.get('id');
    
    this._post.Find(this.id).subscribe(
    
    data=>{
    
      this.Emp=data;
    }
    
    
    );
    
    }




}
