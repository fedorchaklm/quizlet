import React, {PropsWithChildren} from "react";
import '@/app/[lang]/globals.css'
import {inter} from '@/ui/fonts';
import Menu from "@/ui/menu/Menu";
import Logo from "@/ui/logo/Logo";
import LogInOut from "@/ui/login-form/LogInOut";
import {i18n, type Locale} from "@/i18n.config";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({children, params}: PropsWithChildren<{ params: Promise<{ lang: Locale }> }>) {
    const { lang } = await params;
    return (
        <html lang={lang}>
        <body className={`${inter.className} antialiased`}>
        <div className="flex justify-between items-center mx-4 my-4">
            <div className='flex items-center gap-4'>
                <Logo/>
                <Menu/>
            </div>
            <LogInOut/>
        </div>
        {children}
        </body>
        </html>
    )
}