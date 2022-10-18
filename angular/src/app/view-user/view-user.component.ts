import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  name='';
  team='';
  designation='';
  salary='';
  user:any;
  data:any;
  id='';
  check="yugeshhh"
  posts : any;
  update:any;
  updateBtn:any;
  updateId:any;
  addBtn:any;

  constructor(private userData:DatashareService,private httpService: HttpService) {
    this.user=this.userData.getUserData();
   
   }
  

  getUsers() {
    this.httpService.getPosts().subscribe(
      (response) => { this.posts = response; },
      (error) => { console.log(error); });
  }
  
  ngOnInit(): void {
    this.getUsers();
  }

  deleteRow(id:any){
    this.httpService.delete(id).subscribe(
      (response) => { this.getUsers()},
      (error) => {  });
      
  }
  onClick(id:any,user:any){
    this.updateBtn=true;
    this.addBtn=false;
    this.updateId=id;
    this.update=user;

  }
  call(data:any){
    console.log(data);
  }
  getData(eventData:any){
    this.update=eventData;
    alert(this.update);
    this.httpService.update(this.updateId,this.update).subscribe(
      (response) => { this.getUsers()},
      (error) => {  });
  }
  // UpdateRow(){
  //   this.onUpdate=false;
  //   let time=new Date();
    
  //   let user = {Id: this.id,name:this.name, team:this.team, designation:this.designation,salary:this.salary,addedTime:time};
  //   this.httpService.update(this.id,user).subscribe(
  //     (response) => { this.getUsers()},
  //     (error) => {  });
  // }
 }
   

