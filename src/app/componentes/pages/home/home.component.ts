import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  OpenDialog = false;
  constructor() { }

  ngOnInit() {}

  aaa(val) { this.OpenDialog = val; console.log(val); }
}
