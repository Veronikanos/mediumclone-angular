import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {StoreModule} from '@ngrx/store'

import {AppComponent} from 'src/app/app.component'
import {AppRoutingModule} from 'src/app/app-routing.module'
import {AuthModule} from 'src/app/auth/auth.module'
import {environment} from 'src/environments/environment'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
