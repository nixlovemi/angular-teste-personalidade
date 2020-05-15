import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pg-start',
  templateUrl: './pg-start.component.html',
  styleUrls: ['./pg-start.component.css']
})
export class PgStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      console.log(333);
  }

}
