import { Component } from '@angular/core';
import { Router} from '@angular/router'; //导入router服务

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularUI';
  isCollapsed = false;
  routerUrl;

  constructor(private router: Router) { }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  toUrl(e){
    console.log(e.hostElement.nativeElement.dataset.name);
    this.routerUrl = e.hostElement.nativeElement.dataset.name;
    this.router.navigateByUrl(this.routerUrl);
  }
}
