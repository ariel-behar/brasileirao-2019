import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface ILanguageContext {
    locales: {
        [key: string]: {
            title: string
        }
    },
    appLanguage: string,
    changeAppLanguage: (language: string) => void

}

const locales: ILanguageContext['locales'] = {
    en: { title: 'English' },
    pt: { title: 'Portuguese' },
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
    const [appLanguage, setAppLanguage] = useState("en");

    useEffect(() => {
        const navigatorLanguage = navigator.language.split('-')[0];

        setAppLanguage(navigatorLanguage);
        i18n.changeLanguage(navigatorLanguage);
    }, [])

    const changeAppLanguage = (language: string) => {
        setAppLanguage(prevState => language);
        i18n.changeLanguage(language);
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