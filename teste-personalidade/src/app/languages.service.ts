import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
    language = {};

    constructor() { }

    changeLanguage(langCode: string) {
        let langFile = '';

        switch (langCode) {
            case 'ptBR':
                langFile = 'assets/languages/ptBR.json';
                break;

            default:
                langFile = 'assets/languages/enUS.json';
                break;
        }

        fetch(langFile).then(res => res.json()).then(jsonLanguage => {
            this.language = jsonLanguage;
        });
    }

    getLanguage() {
        return this.language;
    }
}
