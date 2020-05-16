import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
    langCode = '';
    language = {};

    constructor() {
        this.langCode  = 'enUS';
        const langFile = 'assets/languages/enUS.json';

        const defaultLang = async () => {
            const retLanguage  = await fetch(langFile);
            const jsonLanguage = await retLanguage.json();
            this.language      = jsonLanguage;
        }

        defaultLang();
    }

    async setLanguage(langCode: string) {
        var cntLanguage = Object.keys(this.language).length;
        var isSameLang  = cntLanguage > 0 && this.langCode == langCode;

        if(!isSameLang) {
            let langFile    = '';
            let langCodeSel = '';

            switch (langCode) {
                case 'ptBR':
                    langFile    = 'assets/languages/ptBR.json';
                    langCodeSel = langCode;
                    break;

                default:
                    langCodeSel = 'enUS';
                    langFile    = 'assets/languages/enUS.json';
                    break;
            }

            const response = await fetch(langFile);
            const json     = await response.json();
            this.language  = json;
            this.langCode  = langCodeSel;
        }

        return this.language;
    }

    getCurrentLanguage() {
        return this.language;
    }

    getQuestions() {
        return this.language["test_questions"];
    }
}
