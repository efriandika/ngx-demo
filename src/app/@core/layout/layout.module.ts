import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        // Angular Module
        CommonModule,

        // 3rd Modules
        NgbCollapseModule, // <- Angular Bootstrap
    ]
})
export class LayoutModule {
}
