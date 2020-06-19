import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { AnotherRoutingModule } from './another-routing.module';

/**
 * TO handle to do features
 * @author efriandika
 */
@NgModule({
    declarations: [
        // Every component in this module scope should be registered
        HelloComponent
    ],
    imports: [
        // Angular Required Modules
        CommonModule,

        // Routing Modules
        AnotherRoutingModule
    ]
})
export class AnotherModule {
}
