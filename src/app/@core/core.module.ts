import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { throwIfAlreadyLoaded } from './@shared/exceptions/module-import.exception';

/**
 * To handle common core functionalities
 * @author efriandika
 */
@NgModule({
    imports: [
        // Angular Module
        CommonModule,

        // Own Module
        LayoutModule
    ],
    exports: [
        // Expose children modules of this module
        // So that another module can use them once this module is imported in a module
        // For example: Imported in AppModule
        LayoutModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
