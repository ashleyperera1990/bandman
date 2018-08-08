import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "../../modals/login/login.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit() {
    if (this.userService.user) {

    } else {
      this.openLoginModal();
    }
  }

  openLoginModal() {
      this.modalService.open(LoginComponent);
  }

}
