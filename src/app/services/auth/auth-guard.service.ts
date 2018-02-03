///<reference path="../../../../node_modules/@angular/router/src/router.d.ts"/>
import {Injectable} from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {stat} from "fs";

@Injectable()
export class AuthGuardService implements CanActivate {

    /**
     * @see https://angular.io/api/router/CanActivate
     */
    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(route, state: RouterStateSnapshot) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }

}
