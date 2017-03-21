import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  @Output() toggle = new EventEmitter<boolean>();
  toggleVar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.toggleVar = !this.toggleVar;
    this.toggle.emit(this.toggleVar);
    console.log(this.toggleVar);
  }

}
