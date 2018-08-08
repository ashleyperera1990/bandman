import {EventEmitter, Injectable, Output} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginDetails} from "../models/login-details.model";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {User} from "../models/user.model";

@Injectable()
export class UserService {

    user: User;

    @Output() userLoggedIn = new EventEmitter();

    constructor(private http: HttpClient, private router: Router) {
    }

    login(creds: LoginDetails) {
        return this.http.put<User>('api/login', creds).pipe(tap(user => {
            this.user = user;
            this.userLoggedIn.emit(user);
        }));
    }

    logOut() {
        this.user = null;
        this.userLoggedIn.emit(null);
        this.router.navigateByUrl('');
    }


}