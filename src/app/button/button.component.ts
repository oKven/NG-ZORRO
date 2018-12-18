import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLoadingOne = false;
  isLoadingTwo = false;

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(_ => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(_ => {
      this.isLoadingTwo = false;
    }, 5000);
  }

}



// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'nz-demo-button-basic',
//   template: `
//     <button nz-button nzType="primary">Primary</button>
//     <button nz-button nzType="default">Default</button>
//     <button nz-button nzType="dashed">Dashed</button>
//     <button nz-button nzType="danger">Danger</button>`,
//   styles  : [
//     `
//       [nz-button] {
//         margin-right: 8px;
//         margin-bottom: 12px;
//       }
//     `
//   ]
// })
// export class NzDemoButtonBasicComponent {
// }
