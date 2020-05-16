import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fade.animations';

import { LanguagesService } from './languages.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [fadeAnimation]
})
export class AppComponent {
    title = 'teste-personalidade';

    constructor(
        private langSrv: LanguagesService
    ) { }

    public getRouterOutletState(outlet: any) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
