import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home',  pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'posts', component: PostListComponent,
        children:[
            {path: 'post-list', component: PostDetailComponent},
        ]
    },
    {path: '**', component: NotFoundComponent}
];