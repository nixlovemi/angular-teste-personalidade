import { Component } from '@angular/core';
import { LanguagesService } from './languages.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'teste-personalidade';

    constructor(
        private langSrv: LanguagesService,
        private router: Router
    ) { }

    goToStart() {
        this.router.navigate(['start']);
    }
}
