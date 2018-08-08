import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "../modals/login/login.component";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router,
                private modalService: NgbModal) {};

    canActivate() {
        if (this.userService.user) {
            return true;
        } else {
            this.router.navigateByUrl('home');
        }
    }



}