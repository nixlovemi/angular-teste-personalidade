import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-pg-test',
  templateUrl: './pg-test.component.html',
  styleUrls: ['./pg-test.component.css']
})
export class PgTestComponent implements OnInit {
    question    = '';
    arrOptions  = [];
    idxSelected = -1;
    btnDisabled: boolean;
    idxCurrQuestion: number;
    maxIdxQuestion: number;
    arrAnswers  = [];

    constructor(
        private langSrv : LanguagesService,
        private router: Router,
        private actRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        /*
        @todo
        I need to find a way to make transactions works when only the param is changed
        */
        this.actRoute.params.subscribe(routeParams => {
            this.load(parseInt(routeParams.questionIdx));
        });
    }

    load(questionIdx: number) {
        this.arrOptions      = [];
        this.idxCurrQuestion = questionIdx;

        const questions  = this.langSrv.getQuestions();
        if( typeof questions === 'undefined' ){
            this.router.navigate(['index']);
            return;
        }

        this.idxSelected    = this.arrAnswers[this.idxCurrQuestion];
        if(typeof this.idxSelected === 'undefined'){
            this.idxSelected = -1;
        }
        this.btnDisabled    = (this.idxSelected < 0);
        this.maxIdxQuestion = Object.keys(questions).length;
        this.question       = questions[this.idxCurrQuestion]["question"];
        const objOptions    = questions[this.idxCurrQuestion]["options"];

        for(let idx in objOptions){
            const option = objOptions[idx];
            this.arrOptions.push(option["text"]);
        }
    }

    selectAnswer(index: number) {
        if(index == this.idxSelected){
            this.idxSelected = -1;
        } else {
            this.idxSelected = index;
        }

        this.arrAnswers[this.idxCurrQuestion] = this.idxSelected;
        this.btnDisabled = (this.idxSelected < 0);
    }

    back() {
        if(this.idxCurrQuestion == 0){
            this.router.navigate(['start']);
        } else {
            const prevIdx = this.idxCurrQuestion - 1;
            this.router.navigate(['test/' + prevIdx]);
        }
    }

    foward() {
        const nextIdx = this.idxCurrQuestion + 1;
        if(nextIdx >= this.maxIdxQuestion){
            const questions    = this.langSrv.getQuestions();
            const finalAnswers = [];
            finalAnswers['A']  = 0; 
            finalAnswers['C']  = 0; 
            finalAnswers['I']  = 0; 
            finalAnswers['O']  = 0; 

            for(let i=0; i<this.arrAnswers.length; i++){
                const answer = this.arrAnswers[i];
                const type   = questions[i]["options"][answer]["type"];
                finalAnswers[type]++;
            }
            
            this.router.navigate(['finish/' + finalAnswers['A'] + '/' + finalAnswers['C'] + '/'+ finalAnswers['I'] + '/' + finalAnswers['O']]);
        } else {
            this.router.navigate(['test/' + nextIdx]);
        }
    }
}
