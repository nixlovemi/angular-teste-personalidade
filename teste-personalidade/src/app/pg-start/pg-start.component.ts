import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LanguagesService } from '../languages.service';

@Component({
    selector: 'app-pg-start',
    templateUrl: './pg-start.component.html',
    styleUrls: ['./pg-start.component.css']
})
export class PgStartComponent implements OnInit {
    language: any;
    sectionTitle = '';
    answerQuest  = '';
    startTest    = '';

    constructor(
        private router: Router,
        private langSrv: LanguagesService
    ) { }

    ngOnInit(): void { }

    ngAfterContentInit() {
        this.language = this.langSrv.getCurrentLanguage();
        const cntLang = Object.keys(this.language).length;
        if( cntLang <= 0 ){
            this.router.navigate(['index']);
        }

        this.sectionTitle = this.language.personality_test;
        this.answerQuest  = this.language.please_answer_questions;
        this.startTest    = this.language.start_test;
    }

    beginTest() {
        this.router.navigate(['test/0']);
    }
}
