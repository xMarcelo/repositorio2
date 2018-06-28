import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-elaborar-carta',
  templateUrl: './elaborar-carta.component.html',
  styleUrls: ['./elaborar-carta.component.css']
})
export class ElaborarCartaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

}
