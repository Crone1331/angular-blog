import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoUserComponent } from './info/info-user/info-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NotFoundComponent,
    PostsComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    MainInfoComponent,
    AboutMeComponent,
    InfoUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
