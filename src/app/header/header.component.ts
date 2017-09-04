import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  // x:number = 10;
  // x:string = 'string';
  // x:boolean = true;
  // x:string[] = ['str', 'str1', 'str2'];
  // users:User[] = [
  //   {name: 'Bob', age: 50}
  // ]
  // x:any = 'sdfsdfsdf';

  title = 'Angular2 App';


}
