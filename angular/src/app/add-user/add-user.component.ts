import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
import { DatashareService } from '../datashare.service';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  id='';
  name="";
  team='';
  designation='';
  salary='';
  user:any=[];
  isSubmitted=false;
@Input() update:any;
@Input() updateId:any;
@Input() updateBtn:any;
@Output() sendToView = new EventEmitter();
@Input() addBtn:any;
@Output() justSend=new EventEmitter();

  constructor(private userData:DatashareService,
    private httpService: HttpService) { 
      this.addBtn=true;
  }

  ngOnInit(): void {
    // this.update.name="Enter the name";
    // this.update.team="Enter the team";

    // this.update.designation="Enter the designation";
    // this.update.salary="Enter the salary";

  }
  alertMessage(){
    let time=new Date();
    let user = {name:this.name, team:this.team, designation:this.designation,salary:this.salary,addedTime:time};
    this.isSubmitted=true;
    this.userData.setUserData(user);
    this.httpService.addPost(user).subscribe(
      (response) => { },
      (error) => {  });
  };
  
  UpdateRow(){
    
    this.updateBtn=true;
    let time=new Date();
    let user = {Id: this.updateId,name:this.name, team:this.team, designation:this.designation,salary:this.salary,addedTime:time};
    alert(user.Id+" "+user.name);
    console.log(this.sendToView);
    this.sendToView.emit(this.user);
    this.justSend.emit("TEsting");
  }

  }


