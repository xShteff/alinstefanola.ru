import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HomeComponent } from './components/main/home/home.component';
import { ParallaxIntroComponent } from './components/main/parallax-intro/parallax-intro.component';
import { AnchorComponent } from './components/main/anchor/anchor.component';
import { IntroComponent } from './components/main/intro/intro.component';
import { ExperienceTimelineComponent } from './components/main/experience-timeline/experience-timeline.component';
import { JobEventComponent } from './components/main/job-event/job-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HobbiesComponent } from './components/main/hobbies/hobbies.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillComponent } from './components/main/skill/skill.component';
import { SkillListComponent } from './components/main/skill-list/skill-list.component';
import { SkillLevelsComponent } from './components/main/skill-levels/skill-levels.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParallaxIntroComponent,
    AnchorComponent,
    IntroComponent,
    ExperienceTimelineComponent,
    JobEventComponent,
    HobbiesComponent,
    ParallaxDirective,
    HeaderComponent,
    FooterComponent,
    SkillComponent,
    SkillListComponent,
    SkillLevelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
