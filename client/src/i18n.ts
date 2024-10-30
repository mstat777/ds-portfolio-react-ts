import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

import frGlobal from './locales/fr/global.json';
import frProject from './locales/fr/projects.json';
import enGlobal from './locales/en/global.json';
import enProject from './locales/en/projects.json';
import bgGlobal from './locales/bg/global.json';
import bgProject from './locales/bg/projects.json';

export const defaultNS = 'global';

export const resources = {
    fr: {
        global: frGlobal,
        projects: frProject
    },
    en: {
        global: enGlobal,
        projects: enProject
    },
    bg: {
        global: bgGlobal,
        projects: bgProject
    }
}
export const languages = ["fr", "en", "bg"];

export function changeLanguage(langCode: string) {
    // if the selected language is different than the current one, then change it
    if (langCode !== i18next.language) {
        i18next.changeLanguage(langCode);
    }
}

export function getLanguage() {
    return i18next.language;
}

i18next
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        resources,
        ns: ['global', 'projects'],
        defaultNS,
        nsSeparator: ':',
        lng: "fr",
        fallbackLng : false
    });

export default i18next;