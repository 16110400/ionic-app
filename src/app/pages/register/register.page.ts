import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name:any=null;
  constructor() { }

  ngOnInit() {
  }

  submit()
  {
    console.log('name',this.name);
  }

}
