import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';

import { PassportRoutingModule } from './passport-routing.module';

import { UserLoginComponent } from './login/login.component';
import { UserRegisterComponent } from './register/register.component';
import { UserRegisterResultComponent } from './register-result/register-result.component';
import { LayoutPassportComponent } from '../../layout/passport/passport.component';
import { UserLockComponent } from './lock/lock.component';

@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent, UserRegisterResultComponent, LayoutPassportComponent, UserLockComponent],
  imports: [CommonModule, SharedModule, PassportRoutingModule],
})
export class PassportModule {}
