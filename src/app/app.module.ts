import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN , NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './login/login.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
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

registerLocaleData(zh);

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    LoginComponent,
    ButtonComponent,
    NavComponent,
    PaginationComponent,
    TimeComponent,
    UploadComponent,
    SwiperComponent,
    TabComponent,
    TreeComponent,
    DrawerComponent,
    ShowmodalComponent,
    ProgressComponent,
    LoadingComponent,
    BacktopComponent,
    SwitchComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // 不提供的话，即为 Ant Design 的主题蓝色
    { provide: NZ_ICONS, useValue: icons }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
