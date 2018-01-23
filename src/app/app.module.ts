import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseComponent} from './course/course.component';
import {CoursesService} from "./courses.service";
import {AuthorsComponent} from './authors/authors.component';
import {AuthorsService} from "./authors.service";
import {SummaryPipe} from "./summary.pipe";
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';


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
        ZippyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        CoursesService,
        AuthorsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
