import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'http://localhost:5000/api/employee';

  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get(this.url);
  }

  addPost(post: any) {
    return this.http.post(this.url, post);
  }

  delete(id:any){
    return this.http.delete(this.url+'/'+id);
  }

  update(id:any,data:any){
    return this.http.put(this.url+"/"+id,data);
  }
}
