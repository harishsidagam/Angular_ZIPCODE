import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZipcodeComponent } from './components/zipcode/zipcode.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
