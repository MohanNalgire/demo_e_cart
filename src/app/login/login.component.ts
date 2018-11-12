import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public login(event){
     event.preventDefault();
     console.log('test ',event.target);
     
  }

  public cancelLogin(event){
    console.log('cancel action',event.target);
  }

}
