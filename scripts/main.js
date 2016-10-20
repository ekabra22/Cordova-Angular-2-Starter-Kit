//dynamic bootstrapping
"use strict";
// The browser platform with a compiler
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// The app module
var app_module_1 = require('./app.module');
function callWhenReady() {
    // Compile and launch the module
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
}
exports.callWhenReady = callWhenReady;
//static bootstrapping
//// The browser platform without a compiler
//import { platformBrowser } from '@angular/platform-browser';
//// The app module factory produced by the static offline compiler
//import { AppModuleNgFactory } from './app.module.ngfactory';
//// Launch with the app module factory.
//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
