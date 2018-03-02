// @see https://angular.io/api/core/ErrorHandler
import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler {

    handleError(error) {
        // @todo Implement tost notification instead of alert
        alert('An unexpected error occurred');
        // @todo Log errors to server instead of console.log
        console.log(error);
    }
}
