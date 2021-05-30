import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthModule } from 'src/shared/auth/auth.module';
import { ConfigService } from 'src/shared/core/services/config.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as components from './components';

@NgModule({
  declarations: [
    ...components.components,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    NgbModule
  ],
  providers: [
    {
        provide: APP_INITIALIZER,
        multi: true,
        deps: [ConfigService],
        useFactory: (configService: ConfigService) => {
          return () => {
            return configService.loadAppConfig();
          };
        }
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
