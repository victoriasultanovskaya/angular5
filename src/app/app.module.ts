import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorHandler, NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseComponent} from './course/course.component';
import {CoursesService} from './courses.service';
import {AuthorsComponent} from './authors/authors.component';
import {AuthorsService} from './authors.service';
import {SummaryPipe} from './summary.pipe';
import {FavoriteComponent} from './favorite/favorite.component';
import {TitleCasePipe} from './title-case.pipe';
import {PanelComponent} from './panel/panel.component';
import {LikeComponent} from './like/like.component';
import {InputFormatDirective} from './input-format.directive';
import {ZippyComponent} from './zippy/zippy.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {NewCourseFormComponent} from './new-course-form/new-course-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {CourseTopicComponent} from './course-topic/course-topic.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {PostsComponent} from './posts/posts.component';
import {PostService} from './services/post/post.service';
import {AppErrorHandler} from './common/errors/app-error-handler';
import {GithubFollowersComponent} from './github-followers/github-followers.component';
import {GithubFollowersService} from "./services/github-followers/github-followers.service";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {GithubProfileComponent} from "./github-profile/github-profile.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {BlogComponent} from './blog/blog.component';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./login/login.component";
import {NoAccessComponent} from "./no-access/no-access.component";
import {OrderService} from "./services/order/order.service";
import {AuthService} from "./services/auth/auth.service";
import {fakeBackendProvider} from "./helpers/fake-backend";
import {MockBackend} from "@angular/http/testing";


@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        CourseComponent,
        AuthorsComponent,
        SummaryPipe,
        FavoriteComponent,
        TitleCasePipe,
        PanelComponent,
        LikeComponent,
        InputFormatDirective,
        ZippyComponent,
        ContactFormComponent,
        NewCourseFormComponent,
        SignupFormComponent,
        CourseTopicComponent,
        ChangePasswordComponent,
        PostsComponent,
        GithubFollowersComponent,
        GithubProfileComponent,
        NavbarComponent,
        HomeComponent,
        NotFoundComponent,
        BlogComponent,
        BlogPostComponent,

        AdminComponent,
        LoginComponent,
        NoAccessComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'followers/:userId/:username',
                component: GithubProfileComponent
            },
            {
                path: 'followers',
                component: GithubFollowersComponent
            },
            {
                path: 'posts',
                component: PostsComponent
            },
            {
                path: 'blog/:year/:month',
                component: BlogPostComponent
            },
            {
                path: 'blog',
                component: BlogComponent
            },
            {
                path: '**',
                component: NotFoundComponent
            },
            {
                path: 'admin',
                component: AdminComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'no-access',
                component: NoAccessComponent
            }

        ])
    ],
    providers: [
        CoursesService,
        AuthorsService,
        PostService,
        GithubFollowersService,

        OrderService,
        AuthService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,

        //means "Instead of ErrorHandler use class AppErrorHandler"
        {provide: ErrorHandler, useClass: AppErrorHandler}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
