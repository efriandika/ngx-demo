import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { AnotherRoutingModule } from './another-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

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
        ReactiveFormsModule,

        // Routing Modules
        AnotherRoutingModule
    ]
})
export class AnotherModule {
}
