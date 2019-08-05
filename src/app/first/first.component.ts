import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  randomNumber: number;
  
  constructor() {}

  randomNum(){
    this.randomNumber = Math.ceil(Math.random() * 20);
  }
  
  ngOnInit() {
  }

}
