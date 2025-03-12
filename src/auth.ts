import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import { sql } from '@vercel/postgres';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { User } from '@/lib/models';

async function getUser(name: string): Promise<User | undefined> {
    console.log('> getUser')
    try {
        const user = await sql<User>`SELECT * FROM users WHERE name=${name}`;
        console.log(`${user.rows[0]}`);
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                console.log('> authorize', credentials);
                const parsedCredentials = z
                    .object({ name: z.string().min(3), password: z.string().min(1) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    try {
                        const { name, password } = parsedCredentials.data;
                        const user = await getUser(name);

                        if (!user) {
                            throw new Error('User not found');
                        }

                        const passwordsMatch = await bcrypt.compare(password, user.password);

                        if (!passwordsMatch) {
                            throw new Error('Password mismatch');
                        }

                        return user;
                    } catch (e) {
                        if (e instanceof Error) {
                            console.error('Failed to fetch user:', e.message);
                        }

                        return null;
                    }
                }

                return null;
            },
        }),
    ],
});

