// import {sql} from '@vercel/postgres';
// import {User} from "next-auth";
// import {IUser} from "@/app/lib/models";

// export async function initDatabase() {
//         try {
//             await sql<IUser>`CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY AUTO_INCREMENT, username VARCHAR(255) not null, PASSWORD VARCHAR(255) not null)`
//         } catch (error) {
//             console.error('Database Error:', error);
//             throw new Error('Failed to fetch revenue data.');
//         }
// }
//
// export async function createUser(data: IUser): Promise<User> {
//     try {
//         // Artificially delay a response for demo purposes.
//         // Don't do this in production :)
//
//         console.log('Fetching revenue data...');
//
//        await sql<IUser>`INSERT INTO users VALUES (null, ${data.username}, ${data.password})`;
//        const result = await sql<IUser>`SELECT * FROM users WHERE username = ${data.username}`;
//
//         console.log('Data fetch completed after 3 seconds.');
//
//         return result;
//
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw new Error('Failed to fetch revenue data.');
//     }
// }