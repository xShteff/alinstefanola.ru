import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HomeComponent } from './components/main/home/home.component';
import { ParallaxIntroComponent } from './components/main/parallax-intro/parallax-intro.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ParallaxIntroComponent],
  imports: [BrowserModule, AppRoutingModule, NgZorroAntdModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
