import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { IndexComponent } from './views/index/index.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './components/main/main.component';
import { BigPictureComponent } from './big-picture/big-picture.component';
import { BioComponent } from './views/bio/bio.component';
import { ApiComponent } from './views/api/api.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { LogoComponent } from './components/logo/logo.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IndexComponent,
    NavBarComponent,
    CardComponent,
    MainComponent,
    BigPictureComponent,
    BioComponent,
    ApiComponent,
    ProjectsComponent,
    LogoComponent,
    PhotoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
