import { Component, OnInit } from '@angular/core';
import { PostService } from '../Posts/post.service';
//import { Post } from '../Posts/post/Post';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//Emp:Post[]=[];

  constructor(private _post:PostService) { }

  ngOnInit(): void {
    

  }








}
