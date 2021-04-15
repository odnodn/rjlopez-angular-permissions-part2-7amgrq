import { PermissionType } from '../permission-type';
import { Resource } from '../resource';
import { PermissionBase } from './base.permissions';
import {Permission } from '../permission';

export class UserPermission extends PermissionBase {

  constructor() {
    super();
    this.permissions = [
      new Permission(Resource.BILL, [
        PermissionType.READ,
        PermissionType.ORDER
      ]),
      new Permission(Resource.PASTA, [
        PermissionType.READ,
        PermissionType.ORDER
      ]),
      new Permission(Resource.PIZZA, [
        PermissionType.READ,
        PermissionType.ORDER
      ])
    ];
  }
}
