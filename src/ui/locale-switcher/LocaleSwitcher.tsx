"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {i18n, Locale} from "@/i18n.config";

export default function LocaleSwitcher() {
    const pathname = usePathname();
    const redirectedPathname = (locale: Locale) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <div>
            <ul className='flex gap-4'>
                {i18n.locales.map((locale) => {
                    return (
                        <li className='btn-special' key={locale}>
                            <Link href={redirectedPathname(locale)}>{locale}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}