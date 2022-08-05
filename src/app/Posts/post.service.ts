import { Injectable } from '@angular/core';
import { Post } from './post/Post';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable ,map, filter} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
//private Api='https://jsonplaceholder.typicode.com/posts';
 private _url='http://localhost:3000/';
  constructor(private _http:HttpClient) { }

id!:number;
phone!:number;



getAll():Observable<Post[]>{

return this._http.get<Post[]>(this._url+'emp');

}
 FindName(name:string):Observable<Post[]>{

//const params=new HttpParams().set('name',"Avika ananya");

//const headers=new HttpHeaders().set('Content-Type','application/json');

return this._http.get<Post[]>(this._url+'emp?name='+name);

//return this._http.get<Post[]>(this._url+'emp',{'params':params, 'headers':headers, withCredentials:true});

 }
 
Add(Emp:any):Observable<Post[]>{

const headers={'Content-Type':'application/json'};

const body=JSON.stringify(Emp);


 return this._http.post<Post[]>(this._url+'emp',body,{'headers':headers});


}

UpdateOne(Emp:any,id:any):Observable<Post[]>{
//id:any,name:any,depart:any,phone:any
const headers={'Content-Type':'application/json'};

const body=JSON.stringify(Emp)

return this._http.put<Post[]>(this._url+'emp/'+id,body,{'headers':headers});


}
DeleteId(id:any):Observable<Post[]>{


const headers={'Content-Type':'application/json'};

return this._http.delete<Post[]>(this._url+'emp/'+id,{'headers':headers});

}
Find(id:any):Observable<Post[]>{

return this._http.get<Post[]>(this._url+'emp/'+id);
}

}
