import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '', component: MainPageComponent, children: [
        {
          path: '', redirectTo: '/', pathMatch: 'full'
        },
        {
          path: '', component: MainInfoComponent,
        },
        {
          path: 'posts', component: PostsComponent
        },
        {
          path: 'about-me', component: AboutMeComponent
        }
      ]
    },
    {
      path: '**', component: NotFoundComponent,
    }

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
