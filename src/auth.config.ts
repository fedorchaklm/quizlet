import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            console.log('> authorized callback', auth);
            const isLoggedIn = !!auth?.user;
            const isProtected = !/(login|register)$/.test(nextUrl.pathname);

            if (isProtected) {
                return isLoggedIn;
            }

            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;