import { useEffect, useState } from "react";
import { languages, changeLanguage, getLanguage } from '../../i18n';
import fr from '../../assets/img/i18n/flags/fr.png';
import en from '../../assets/img/i18n/flags/en.png';
import bg from '../../assets/img/i18n/flags/bg.png';

type Props = {
    child: React.FC;
}

export default function withLocalStorage({ child }: Props) {
    const Child = child;

    const images = [
        { code: "fr", file: fr }, 
        { code: "en", file: en },
        { code: "bg", file: bg }
    ];

    const [currLang, setCurrLang] = useState<string>('');
    const [currLangImg, setCurrentLangImg] = useState<string | undefined>(undefined);

    const locStLang = localStorage.getItem("lang"); // store current language in localStorage

    useEffect(() => {  
        if (locStLang) { // if language is defined in localStorage, then load it
            setCurrLang(locStLang);
        } else { // otherwise set the default language
            setCurrLang(getLanguage());
        }
    },[]);

    useEffect(() => {
        if (currLang) {
            changeLanguage(currLang);
            changeLangImage();
        }
    },[currLang]);

    // change the image of the current language on switch language
    function changeLangImage(): void {
        images.forEach(image => {
            if (currLang === image.code){
                setCurrentLangImg(image.file);
            }
        });
    }

    return (<Child/>)
}