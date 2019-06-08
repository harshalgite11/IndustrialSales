import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';
import { SocialComponent } from './social/social.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientfeedbackComponent } from './clientfeedback/clientfeedback.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    SocialComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ClientfeedbackComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
