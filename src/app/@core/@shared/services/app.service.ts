import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

/**
 * To handle common app business logic
 * @author efriandika
 */
@Injectable({
    providedIn: 'root'
})
export class AppService {

    /**
     * Show application name that is set from environment variable
     */
    public getName() {
        return environment.appName;
    }
}
