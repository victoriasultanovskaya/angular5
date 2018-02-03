import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

    constructor(private router: Router,
                private authService: AuthService) {
    }

    canActivate() {
        const user = this.authService.currentUser;

        if (user && user.admin) {
            return true;
        }
        /**
         * Otherwise navigate user to permission denied page
         * redirects http://localhost:4200/admin -> http://localhost:4200/no-access
         */
        this.router.navigate(['/no-access']);
        return false;
    }
}
