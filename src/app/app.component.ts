import { Component, OnInit } from '@angular/core';
import { Role } from './manager/role';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PermissionManagerService } from './manager/permission-manager.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  public form: FormGroup;

  constructor(private userS: PermissionManagerService, private fb: FormBuilder) {}

  ngOnInit() {
    this.userS.authAs(localStorage.getItem('role') as Role);
    this.buildForm();
  }

  buildForm() {
    const currentRole = localStorage.getItem('role') === null
                        ? Role.UNKNOWN
                        : localStorage.getItem('role');
    this.form = this.fb.group({
      role: [currentRole, [Validators.required]]
    });
  }

  loginAs() {
    this.userS.authAs(this.form.get('role').value as Role);
    location.reload();
  }

  getRole() {
    return localStorage.getItem('role');
  }

}
