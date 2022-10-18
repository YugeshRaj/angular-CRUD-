


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  list:any = [];
  constructor() { }
  getUserData(){
    return this.list;
  }
  setUserData(data: any){
  this.list.push(data);
  }
}
