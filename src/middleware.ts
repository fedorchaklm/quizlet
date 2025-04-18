import NextAuth from 'next-auth';
import {authConfig} from './auth.config';
import {NextRequest, NextResponse} from "next/server";
import {match as matchLocale} from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import {i18n} from "./i18n.config";

const {auth} = NextAuth(authConfig);

function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales;

    // Use negotiator and intl-localematcher to get best locale
    let languages = new Negotiator({headers: negotiatorHeaders}).languages(
        locales,
    );

    return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
    // If you have one
    if (
        [
            '/manifest.json',
            '/favicon.ico',
            '/assets/min.png'
            // Your other files in `public`
        ].includes(pathname)
    )
        return
    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        const url = new URL(
            `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
            request.url,
        );
        console.log('>', {pathname, url});

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(url);
    }

    // @ts-ignore: TODO request isn't match
    return auth(request);
}

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};