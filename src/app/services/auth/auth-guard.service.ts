import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    /**
     * @see https://angular.io/api/router/CanActivate
     */
    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}
