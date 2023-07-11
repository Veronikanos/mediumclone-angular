import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {switchMap, map, catchError} from 'rxjs/operators'
import {of} from 'rxjs'

import {registerAction, registerFailureAction, registerSuccessAction} from '../actions/register.action'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import { AuthService } from 'src/app/auth/services/auth.service'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      //get all actions in this.actions$
      ofType(registerAction), //filter array of actions to get just one action that we want
      switchMap(({request}) => {
        //transform Observable with switchMap to get updated Observable
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({currentUser})
          }),
          catchError(() => {
            return of(registerFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
