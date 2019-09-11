import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
// import { registerContentQuery } from "@angular/core/src/render3/instructions";
import { AuthService } from "../_services/auth.service";
import * as alertify from "alertifyjs";
import { AlertifyService } from "../_services/alertify.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        alertify.success("registration successful");
      },
      error => {
        alertify.error(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
    alertify.message("cancelled");
  }
}
