import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IconComponent} from './icon/icon.component';
import {LoginComponent} from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { NavComponent } from './nav/nav.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TimeComponent } from './time/time.component';
import { UploadComponent } from './upload/upload.component';
import { SwiperComponent } from './swiper/swiper.component';
import { TabComponent } from './tab/tab.component';
import { TreeComponent } from './tree/tree.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ShowmodalComponent } from './showmodal/showmodal.component';
import { ProgressComponent } from './progress/progress.component';
import { LoadingComponent } from './loading/loading.component';
import { BacktopComponent } from './backtop/backtop.component';
import { SwitchComponent } from './switch/switch.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: 'icon',
    component: IconComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'page',
    component: PaginationComponent
  },
  {
    path: 'time',
    component: TimeComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'swiper',
    component: SwiperComponent
  },
  {
    path: 'tab',
    component: TabComponent
  },
  {
    path: 'tree',
    component: TreeComponent
  },
  {
    path: 'drawer',
    component: DrawerComponent
  },
  {
    path: 'showmodal',
    component: ShowmodalComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'loading',
    component: LoadingComponent
  },
  {
    path: 'backtop',
    component: BacktopComponent
  },
  {
    path: 'switch',
    component: SwitchComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
