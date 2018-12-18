import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  // percent = 0;
  constructor() { }

  ngOnInit() {
  }
  // increase(): void {
  //   this.percent = this.percent + 10;
  //   if (this.percent > 100) {
  //     this.percent = 100;
  //   }
  // }
  //
  // decline(): void {
  //   this.percent = this.percent - 10;
  //   if (this.percent < 0) {
  //     this.percent = 0;
  //   }
  // }
}
