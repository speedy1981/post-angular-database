import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListItemComponent } from './posts/post-list-item/post-list-item.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { PostService } from './services/post.service';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
const appRoutes:Routes=[
{path:'posts/new',component:NewPostComponent},
{path:'posts',component:PostListItemComponent},
{path:'',redirectTo:'posts',pathMatch:'full'},
{path:'**',redirectTo:'posts'}
]
@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
