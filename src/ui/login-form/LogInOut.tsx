import Link from "next/link";
import React from "react";
import {logOut} from "@/actions/login";
import {auth} from "@/auth";

const LogInOut = async () => {
    const session  = await auth();

    return (
        session != null ?
            <form action={logOut}>
                <button
                    className='bg-white px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200 disabled:bg-background-100'>
                    Log out
                </button>
            </form> :
            <Link href={'/'}
                  className='flex items-center justify-center bg-white px-2 hover:text-foreground h-10 rounded-lg hover:bg-gray-200 disabled:bg-background-100'>Log
                in</Link>
    )
};

export default LogInOut;