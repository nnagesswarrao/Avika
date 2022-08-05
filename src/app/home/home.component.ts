import { Component, OnInit } from '@angular/core';
import { PostService } from '../Posts/post.service';
import { Post } from '../Posts/post/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Emp:Post[]=[];
  constructor(private _post:PostService) { }

  ngOnInit(): void {
    this.GetAll();
  }


  GetAll(){

    this._post.getAll().subscribe(data=>{
    
      this.Emp=data;
    });
  }

}
