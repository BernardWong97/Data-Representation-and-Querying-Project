import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../login/login.component';
import { PostDetailsComponent } from '../post-details/post-details.component';

const appRoutes: Routes = [
    { path: 'user', component: UserComponent },
    { path: '', component: LoginComponent },
    { path: 'movie_database', component: PostDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
      ],
      exports: [
        RouterModule
      ],
      declarations: []
})
export class AppRoutingModule { }