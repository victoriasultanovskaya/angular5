import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'course-topic',
    templateUrl: './course-topic.component.html',
    styleUrls: ['./course-topic.component.css']
})
export class CourseTopicComponent {
    form = new FormGroup({
        topics: new FormArray([])
    });

    addTopic(topic) {
        this.topics.push(new FormControl(topic.value));
        topic.value = '';
    }

    get topics() {
        return this.form.get('topics') as FormArray;
    }

    removeTopic(topic: FormControl) {
        let index = this.topics.controls.lastIndexOf(topic);
        this.topics.removeAt(index);
    }
}
