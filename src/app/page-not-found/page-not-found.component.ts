import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Posts/post.service';
import { Post } from '../Posts/post/Post';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private _post:PostService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    
  }








}
