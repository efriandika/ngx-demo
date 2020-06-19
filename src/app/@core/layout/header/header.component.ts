import { Component, OnInit } from '@angular/core';
import { AppService } from '../../@shared/services/app.service';

/**
 * Handling global header
 *
 * @author efriandika
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public appTitle: string;
    public isMenuCollapsed = true;

    constructor(
       private appService: AppService
    ) {}

    /**
     * Example of angular component life cycle: ngOnInit, ngOnChanges, ngOnDestroy, etc..
     * see {@link https://angular.io/guide/lifecycle-hooks#lifecycle-event-sequence Angular Docs}
     * for further detail
     */
    ngOnInit(): void {
        this.appTitle = this.appService.getName();
    }
}
