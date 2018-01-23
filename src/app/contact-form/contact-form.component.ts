import { Component, OnInit } from '@angular/core';


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
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
