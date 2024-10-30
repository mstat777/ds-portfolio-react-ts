import './SwitchLangCtn.scss';
import React, { useEffect } from 'react';
import { languages, changeLanguage, getLanguage } from '../../i18n';
import fr from '../../assets/img/i18n/flags/fr.png';
import en from '../../assets/img/i18n/flags/en.png';
import bg from '../../assets/img/i18n/flags/bg.png';

export default function SwitchLangCtn() {
    const [ showLangMenu, setShowLangMenu ] = React.useState<boolean>(false);
    const [ currLang, setCurrLang ] = React.useState<string>('fr');
    const [ currLangImg, setCurrentLangImg] = React.useState<string>(fr);

    const images = [
        { code: "fr", file: fr }, 
        { code: "en", file: en },
        { code: "bg", file: bg }
    ];

    useEffect(() => {
        setCurrLang(getLanguage());
    },[]);

    // change language image, if current language changes
    useEffect(() => {
        changeLangImage();
    },[currLang]);

    // show/hide language menu
    function toggleLangMenu() {
        setShowLangMenu(!showLangMenu);
    }

    function changeLangAndHideMenu(langCode: string) {
        changeLanguage(langCode);
        setCurrLang(getLanguage());
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
        <div className="switch_lang_ctn">
            
            <button onClick={toggleLangMenu}className="current_lang_btn">
                <img src={currLangImg} alt="language" />
            </button>
            
            { showLangMenu &&
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
            }
        </div>
    )
}