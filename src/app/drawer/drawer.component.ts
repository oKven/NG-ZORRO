import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  visible = false;
  constructor() { }

  ngOnInit() {
  }
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
