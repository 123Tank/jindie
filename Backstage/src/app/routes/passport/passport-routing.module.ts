import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// passport pages
import { LayoutPassportComponent } from '../../layout/passport/passport.component';
import { UserLoginComponent } from './login/login.component';
import { UserRegisterComponent } from './register/register.component';
import { UserRegisterResultComponent } from './register-result/register-result.component';
import { UserLockComponent } from './lock/lock.component';

const routes: Routes = [
  // passport
  {
    path: '',
    component: LayoutPassportComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: UserLoginComponent, data: { title: '登录' } },
      {
        path: 'register',
        component: UserRegisterComponent,
        data: { title: '注册' },
      },
      {
        path: 'register-result',
        component: UserRegisterResultComponent,
        data: { title: '注册结果' },
      },
      { path: 'lock', component: UserLockComponent, data: { title: '锁屏' } },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassportRoutingModule { }
