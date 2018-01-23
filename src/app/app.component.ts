import {Component} from '@angular/core';
import {FavoriteChangedEventArgs} from "./favorite/favorite.component";
import {isBoolean} from "util";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    canSave = true;
}

