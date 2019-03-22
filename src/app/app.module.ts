import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// “@angular/upgrade/static” captures window.angular
// so below import needs to come after angular js is imported which in this case is

// attached already in angular.json
import {downgradeComponent, UpgradeComponent, UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';
import { AngularJSWrapperComponent } from './components/angularjs-wrapper.component';
import { notifyServiceProvider } from './ajs-upgraded-providers';
import { AngularComponent } from './components/angular.component';

declare const angular: any;

// this is neccesary if you want to use AngularJs style input variable in Angular
angular.module('AngularJsModule').directive('appRoot', downgradeComponent({component: AppComponent}));

@NgModule({
  declarations: [
    AppComponent,
    AngularJSWrapperComponent,
    AngularComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  providers: [
    notifyServiceProvider
  ],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    // this calls angular.bootstrap under the hood but also make sure it runs in the right zone.
    // it adds an extra module that sets up AngularJS to be visible in Angular and vice versa.
    this.upgrade.bootstrap(document.body, ['AngularJsModule']);
  }
}
