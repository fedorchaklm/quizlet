import React, {PropsWithChildren} from "react";
import '@/app/[lang]/globals.css'
import {inter} from '@/ui/fonts';
import Menu from "@/ui/menu/Menu";
import Logo from "@/ui/logo/Logo";
import {getDictionary, i18n, type Locale} from "@/i18n.config";
import LocaleSwitcher from "@/ui/locale-switcher/LocaleSwitcher";
import {auth} from "@/auth";
import LogOut from "@/ui/log-out/LogOut";
import LogIn from "@/ui/log-in/LogIn";
import {ThemeProvider} from "@/context/ThemeContext";
import ChangeThemeButton from "@/ui/change-theme-button/ChangeThemeButton";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}));
}

export default async function RootLayout({children, params}: PropsWithChildren<{ params: Promise<{ lang: Locale }> }>) {
    const session = await auth();
    const {lang} = await params;
    const dictionary = await getDictionary(lang);

    // @ts-ignore
    return (
        <html lang={lang}>
        <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
            <div className="flex justify-between items-center mx-4 my-4">
                <div className='flex items-center gap-4'>
                    <Logo/>
                    <Menu dictionary={dictionary.menu}/>
                </div>
                <div className='flex items-center gap-4'>
                    <LocaleSwitcher/>
                    <ChangeThemeButton/>
                    {session !== null ? <LogOut/> : <LogIn/>}
                </div>
            </div>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}