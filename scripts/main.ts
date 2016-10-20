//dynamic bootstrapping

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app.module';

export function callWhenReady(): void{
    // Compile and launch the module
    platformBrowserDynamic().bootstrapModule(AppModule);
}


//static bootstrapping

//// The browser platform without a compiler
//import { platformBrowser } from '@angular/platform-browser';

//// The app module factory produced by the static offline compiler
//import { AppModuleNgFactory } from './app.module.ngfactory';

//// Launch with the app module factory.
//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
