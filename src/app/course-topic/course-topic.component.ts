import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'course-topic',
    templateUrl: './course-topic.component.html',
    styleUrls: ['./course-topic.component.css']
})
export class CourseTopicComponent {
    form;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            contact: fb.group({
                email: [],
                phone: []
            }),
            topics: fb.array([])
        });
    }

    addTopic(topic) {
        this.topics.push(new FormControl(topic.value));
        topic.value = '';
    }

    get topics() {
        return this.form.get('topics') as FormArray;
    }

    removeTopic(topic: FormControl) {
        const index = this.topics.controls.lastIndexOf(topic);
        this.topics.removeAt(index);
    }
}
