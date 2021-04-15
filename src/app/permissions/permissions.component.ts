import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../manager/resource';
import { PermissionType } from '../manager/permission-type';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  @Input() resource: string;

  constructor() { 

  }

  ngOnInit() {
  }

  public permissionKeys() {
    return Object.keys(PermissionType);
  }

}