import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface ILanguageContext {
    locales: {
        [key: string]: {
            code: 'en' | 'pt'
            title: 'English' | 'Portuguese'
        }
    },
    appLanguage: string,
    changeAppLanguage: (language: this['locales'][keyof this['locales']]['code']) => void

}

const locales: ILanguageContext['locales'] = {
    en: { code: 'en', title: 'English' },
    pt: { code: 'pt', title: 'Portuguese' },
}

const LanguageContext = createContext<ILanguageContext>({
    locales,
    appLanguage: '',
    changeAppLanguage: () => { }
});

interface Props {
    children: React.ReactNode;
}

export function LanguageProvider({ children }: Props) {
    const { i18n } = useTranslation();
    const [appLanguage, setAppLanguage] = useState<ILanguageContext['locales'][keyof ILanguageContext['locales']]['code']>(locales.en.code);

    useEffect(() => {
        const navigatorLanguageCode = navigator.language.split('-')[0];

        if(navigatorLanguageCode !== 'en' && navigatorLanguageCode !== 'pt') {
            return setAppLanguage('en');
        } 
        else{
            setAppLanguage(navigatorLanguageCode);
            i18n.changeLanguage(navigatorLanguageCode);
        }
    }, [])

    const changeAppLanguage = (languageCode: ILanguageContext['locales'][keyof ILanguageContext['locales']]['code']) => {
        setAppLanguage(languageCode);
        i18n.changeLanguage(languageCode);
    }

    return (
        <LanguageContext.Provider value={{ locales, appLanguage, changeAppLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguageContext = () => {
    const languageContext = useContext(LanguageContext);

    return languageContext;
}