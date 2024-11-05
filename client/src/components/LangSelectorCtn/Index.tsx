import './LangSelectorCtn.scss';
import { useState, useEffect, forwardRef, Ref } from 'react';
import { languages, changeLanguage, getLanguage } from '../../i18n';
import fr from '../../assets/img/i18n/flags/fr.png';
import en from '../../assets/img/i18n/flags/en.png';
import bg from '../../assets/img/i18n/flags/bg.png';

const LangSelectorCtn = forwardRef((props, ref: Ref<HTMLDivElement>) => {
    const [ showLangMenu, setShowLangMenu ] = useState<boolean>(false);
    const [ currLang, setCurrLang ] = useState<string>('');
    const [ currLangImg, setCurrentLangImg] = useState<string | undefined>(undefined);

    const images = [
        { code: "fr", file: fr }, 
        { code: "en", file: en },
        { code: "bg", file: bg }
    ];

    const locStLang = localStorage.getItem("lang"); // store current language in localStorage

    useEffect(() => {  
        if (locStLang) { // if language is defined in localStorage, then load it
            setCurrLang(locStLang);
        } else { // otherwise set the default language
            setCurrLang(getLanguage());
        }
    },[]);

    // change language variable & image, every time when current language changes
    useEffect(() => {
        if (currLang) {
            changeLanguage(currLang);
            changeLangImage();
        }
    },[currLang]);

    // show/hide language menu
    function toggleLangMenu() {
        setShowLangMenu(!showLangMenu);
    }

    // change the language data in i18next & triger hide menu
    function changeLangAndHideMenu(langCode: string) {
        changeLanguage(langCode);
        setCurrLang(getLanguage());
        // change in localStorage only if lang changed
        if (langCode !== locStLang) {
            localStorage.setItem("lang", langCode);
        } 
        toggleLangMenu();
    }

    // change the image of the current language on switch language
    function changeLangImage(): void {
        images.forEach(image => {
            if (currLang === image.code){
                setCurrentLangImg(image.file);
            }
        });
    }

    return (
        <div 
            className={`switch_lang_ctn ${showLangMenu ? 'show_lang_menu' : 'hide_lang_menu'}`} onMouseLeave={() => setShowLangMenu(false)}
            ref={ref}
        >
            <button onClick={toggleLangMenu}className="current_lang_btn">
                <img src={currLangImg} alt="language" />
            </button>

            <div className="lang_menu">
                { languages && 
                    languages.map((lang, i) => 
                        <button
                            onClick={() => changeLangAndHideMenu(lang)}
                            key={i}
                            className={`lang_btn ${showLangMenu ? "grey_outline" : null}`}>
                                <img src={images[i].file} alt="language" />
                        </button>
                    )
                }
            </div>
        </div>
    )
});

export default LangSelectorCtn;