'use client';

import {createContext, PropsWithChildren, useContext, useState} from "react";

enum ThemeColorEnum {
    DARK = 'dark',
    LIGHT = 'light'
}

type ThemeContextType = {
    theme: ThemeColorEnum;
    changeTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: ThemeColorEnum.DARK,
    changeTheme: () => {
    }
});

export const ThemeProvider = ({children}: PropsWithChildren) => {
    const [theme, setTheme] = useState<ThemeColorEnum>(ThemeColorEnum.DARK);
    const changeTheme = () => {
        setTheme((prev) => prev === ThemeColorEnum.DARK ? ThemeColorEnum.LIGHT : ThemeColorEnum.DARK);
    }
    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext).theme;
export const useChangeTheme = () => useContext(ThemeContext).changeTheme;