import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss']
})
export class RandomNumberComponent implements OnInit {

  userNumber: number = 1;
  randomNum: any;

  constructor() { }

  randomNumber(){
    this.randomNum = Math.ceil(Math.random() * this.userNumber); 
  }

  ngOnInit() {
  }

}
