import { Component, OnInit } from '@angular/core';
import {BandService} from "../../services/band.service";
import {Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginDetails} from "../../models/login-details.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds;

  constructor(private loginService: UserService, private router: Router,
              private bandService: BandService,
              private modal: NgbActiveModal) {
      this.creds = new LoginDetails();
  }

  ngOnInit() {
  }

  login() {
    if (this.creds.email && this.creds.password) {
        this.loginService.login(this.creds).subscribe((user) => {
          this.bandService.setBand(user.band);
          this.modal.close();
            this.router.navigateByUrl('dashboard');
        });
    }
  }

  cancel() {
    this.modal.close();
  }


}
