import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Store, select} from '@ngrx/store'
import {Observable} from 'rxjs'

import {registerAction} from 'src/app/auth/store/actions/register.action'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {isSubmittingSelector} from '../../store/selectors'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    })
  }

  onSubmit(): void {
    console.log(this.form.valid)
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({request}))
  }
}
