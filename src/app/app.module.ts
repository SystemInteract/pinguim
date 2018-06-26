import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MenuOptionsComponent } from './header/menu-options/menu-options.component';
import { MenuOptionComponent } from './header/menu-options/menu-option/menu-option.component';
import { MainComponent } from './main/main.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MenuSubOptionComponent } from './header/menu-options/menu-option/menu-sub-option/menu-sub-option.component';

import { FormsModule } from '@angular/forms';
import { MenuService } from './header/menu-options/menu-options.service';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuOptionsComponent,
    MenuOptionComponent,
    MainComponent,
    MenuSubOptionComponent,
    UserComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {}
