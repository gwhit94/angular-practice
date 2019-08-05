import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  inputText: string;
  showDiv: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
