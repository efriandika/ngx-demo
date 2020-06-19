import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from './@core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    imports: [
        // Angular Modules
        BrowserModule,

        // 3rd party module
        NgbModule, // <- Angular Bootstrap: https://ng-bootstrap.github.io/#/getting-started#installation

        // Internal Eager Module
        CoreModule,

        // Main Routing Module
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
