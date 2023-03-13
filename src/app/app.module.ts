import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { LandingComponent } from './views/home/components/landing/landing.component';
import { AboutComponent } from './views/home/components/about/about.component';
import { ServicesComponent } from './views/home/components/services/services.component';
import { ContactComponent } from './views/home/components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LandingComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
