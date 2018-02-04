import {Component, OnInit} from '@angular/core';


/**
 * Types of Forms
 * 1. Template-driven
 * 2. Reactive
 * @see angular5\src\assets\FormTypes.png
 */
@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
    contactMethods = [
        {id: 1, name: 'Email'},
        {id: 2, name: 'Phone'}
    ];

    log(x) {
        console.log(x);
    }

    submit(form) {
        console.log(form);
        console.log(form.value); //Send it to server
    }
}
