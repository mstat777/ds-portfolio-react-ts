import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";
import fr from '../assets/img/i18n/flags/fr.png';
import en from '../assets/img/i18n/flags/en.png';
import bg from '../assets/img/i18n/flags/bg.png';

type ContextType = {
    locStLang: string;
    setLocStLang: Dispatch<SetStateAction<string>>;
    currLang: string;
    setCurrLang: Dispatch<SetStateAction<string>>;
    currLangImg: string | undefined;
    setCurrentLangImg: Dispatch<SetStateAction<string | undefined>>;
    changeLangImage: Function,
    images: {
        code: string;
        file: string | undefined;
    }[]
}

const DataLayerContext = createContext<ContextType | null>(null);

const DataLayerProvider = ({ children }: { children: ReactNode }) => {
    const images = [
        { code: "fr", file: fr }, 
        { code: "en", file: en },
        { code: "bg", file: bg }
    ];

    const [currLang, setCurrLang] = useState<ContextType['currLang']>('');
    const [currLangImg, setCurrentLangImg] = useState<ContextType['currLangImg']>(undefined);

    // current language in localStorage (if exists)
    const [locStLang, setLocStLang] = useState(localStorage.getItem("lang") || '');

    function changeLangImage(langCode: string) {
        images.forEach(image => {
            if (langCode === image.code){
                setCurrentLangImg(image.file);
            }
        });
    }

    return (
        <DataLayerContext.Provider value={{
                locStLang,
                setLocStLang,
                currLang, 
                setCurrLang, 
                currLangImg, 
                setCurrentLangImg,
                changeLangImage,
                images
            }}
        >
            { children }
        </DataLayerContext.Provider>
    );
}

export { DataLayerContext, DataLayerProvider }