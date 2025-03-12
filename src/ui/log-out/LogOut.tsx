import React from "react";
import {logOut} from "@/actions/login";

const LogOut = async () => {

    return (
        <form action={logOut}>
            <button className='btn-special'>Log out</button>
        </form>
    )
};

export default LogOut;