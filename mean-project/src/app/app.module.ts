import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostService } from './services/post.service'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './core/app.routing.module';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { ReloadComponent } from './components/reload/reload.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { UsersService } from './services/users.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    ReloadComponent,
    MovieDetailsComponent,
    DialogComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PostService, UsersService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
