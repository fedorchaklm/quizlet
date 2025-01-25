import {NextResponse} from "next/server";
import {db, sql} from "@vercel/postgres";
import bcrypt from "bcrypt";

const client = await db.connect();

export async function GET() {
    return Response.json({message: 'Hello, Luba.'});
}

export async function POST(request: Request) {
    try {
        const {name, email, password} = await request.json();
        // YOU MAY WANT TO ADD SOME VALIDATION HERE

        console.log({name, email, password});

        const hashedPassword = await bcrypt.hash(password, 10);

        const response =
            await client.sql`INSERT INTO users (name, email, password)
                      VALUES (${name}, ${email}, ${hashedPassword})`;
    } catch (e) {
        console.log({e});
        return NextResponse.error();
    }

    return NextResponse.json({message: "success"});
}