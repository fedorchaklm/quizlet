import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/register',
    },
    providers: [],
} satisfies NextAuthConfig;