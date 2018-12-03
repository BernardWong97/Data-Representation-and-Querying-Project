import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ReloadComponent } from '../components/reload/reload.component';
import { PostDetailsComponent } from '../components/post-details/post-details.component';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { AccountComponent } from '../components/account/account.component';

const appRoutes: Routes = [
    { path: 'user/:username', component: UserComponent },
    { path: 'reload/:component', component: ReloadComponent },
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'movie-database', component: PostDetailsComponent },
    { path: 'movie-details/:index', component: MovieDetailsComponent },
    { path: 'account', component: AccountComponent }
]; // All the routing paths

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