import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostService } from './services/post.service'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './core/app.routing.module';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { ReloadComponent } from './reload/reload.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { UsersService } from './services/users.service';
import { DialogComponent } from './dialog/dialog.component';
import { AccountComponent } from './account/account.component';

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
