import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ReloadComponent } from '../reload/reload.component';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { AccountComponent } from '../account/account.component';

const appRoutes: Routes = [
    { path: 'user/:username', component: UserComponent },
    { path: 'reload/:component', component: ReloadComponent },
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'movie-database', component: PostDetailsComponent },
    { path: 'movie-details/:index', component: MovieDetailsComponent },
    { path: 'account', component: AccountComponent}
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