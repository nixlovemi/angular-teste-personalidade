import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LanguagesService } from '../languages.service';

@Component({
    selector: 'app-pg-index',
    templateUrl: './pg-index.component.html',
    styleUrls: ['./pg-index.component.css']
})
export class PgIndexComponent {
    language: any;
    sectionTitle = 'Choose a Language';

    constructor(
        private router: Router,
        private langSrv: LanguagesService
    ) { }

    ngAfterContentInit() {
        this.language = this.langSrv.getCurrentLanguage();

        /*
        @todo
        I have to make this verification because the constructor of language
        is not async. So this part of code happens before the constructor and
        it returns an undefined object. I need to find a way to execute the
        constructor BEFORE this part of code executes.
        */
        if(typeof this.language.choose_language !== 'undefined'){
            this.sectionTitle = this.language.choose_language;   
        }
    }

    async goToStart(langCode: string) {
        this.language     = await this.langSrv.setLanguage(langCode);
        this.sectionTitle = this.language.choose_language;
        this.router.navigate(['start']);
    }
}
