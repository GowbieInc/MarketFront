import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-warning-messages',
  templateUrl: './warning-messages.component.html',
  styleUrls: ['./warning-messages.component.css']
})
export class WarningMessagesComponent implements OnInit {

  @Input("form") form: any;
  @Input("submitted") submitted: boolean;
  @Input("default") default: string;
  @Input("responseError") responseError: boolean = false;

  public EPanelStatus = {
    error: "error",
    warning: "warning",
  }

  public status: string = "error";

  constructor() { }

  ngOnInit() { }

  public getMessage(getField: any, message: string) {
    var field = getField();
    if (field) {
      if (this.form.touched) {
        return field && field.valid ? '' : message;
      } else if (field && field.errors && field.errors.required === true) {
        return this.default
      } else {
        return '';
      }
    } else {
      return null;
    }
  }

  public loginControl     = () => { return this.form.controls['login'] }
  public passwordControl  = () => { return this.form.controls['password'] }
  public passwordsControl = () => { return this.form.controls['passwords'] && this.form.controls['passwords'].controls['password'] }
  public passwordsConfirmControl = () => { return this.form.controls['passwords'] }
  public notificationMethodControl = () => { return this.form.controls['notificationMethod']}
}
