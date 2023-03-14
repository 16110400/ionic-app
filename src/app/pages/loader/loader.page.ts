import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
// import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(
    private appPages:AppComponent
  ) { }

  ngOnInit() {
    console.log("hello cuy");
    console.log("hello cuy");
    console.log("ini", this.appPages.appPages);
  }


}
