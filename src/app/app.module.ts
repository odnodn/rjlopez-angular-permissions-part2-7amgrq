import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PermissionManagerService } from './manager/permission-manager.service';
import { IsGrantedDirective } from './manager/is-granted.directive';
import { PermissionsComponent } from './permissions/permissions.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, NgbTabsetModule ],
  declarations: [ AppComponent, IsGrantedDirective,PermissionsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ PermissionManagerService ]
})
export class AppModule { }
