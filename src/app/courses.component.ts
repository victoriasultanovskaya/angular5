import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
        {{course.title | uppercase | lowercase}} <br />
        {{course.students | number}} <br />
        {{course.rating | number:'1.1-1'}} <br />
        {{course.price | currency:'AUD':true:'3.2-2'}} <br />
        {{course.releaseDate | date:'medium'}} <br /><br /><br />
        {{text | summary:10}}
    `
})

export class CoursesComponent {
    course = {
        title: 'The Complete Angular Course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 3) //https://angular.io/api/common/DatePipe
    };

    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat suscipit tincidunt. Quisque suscipit metus lacus, eu feugiat est aliquam eget. Phasellus semper sapien ut tincidunt eleifend. Ut iaculis volutpat ligula, non facilisis orci posuere non. In pellentesque arcu a nisi ornare, non commodo quam dapibus. Donec egestas vitae neque eget ultricies. Sed urna ex, interdum eget elit non, fermentum dapibus enim. Integer in nisi dolor. Etiam sed urna eu ipsum tempus elementum in tristique ante. Duis leo augue, lobortis eget diam ac, fermentum ultrices odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eu velit sed diam bibendum vulputate ac sit amet metus. Donec iaculis sapien lectus, non scelerisque sapien bibendum id. Suspendisse eget lorem non lectus sollicitudin sagittis. Cras viverra nisi eu mauris efficitur, eu pretium arcu maximus.';
}
