import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'

import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {authReducer} from './store/reducers'
import { AuthService } from './services/auth.service'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
  ],
  declarations: [RegisterComponent],
  providers: [AuthService]
})
export class AuthModule {}
