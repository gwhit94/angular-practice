import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names-list',
  templateUrl: './names-list.component.html',
  styleUrls: ['./names-list.component.scss']
})
export class NamesListComponent implements OnInit {

  names: string[] = ["Graham", "Lisa", "Sally", "Rodeo"]
  newName: string = "";

  addName(){
    this.newName.length > 0 ? this.names.push(this.newName) : this.newName = "";
    this.newName = "";
  }
  removeName(idx){
    this.names.splice(idx, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
