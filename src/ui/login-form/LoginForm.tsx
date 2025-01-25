'use client';
import Link from "next/link";
import {useActionState} from "react";
import {authenticate} from '@/lib/actions';
import {
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

const LoginForm = () => {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <div className="flex flex-col items-center gap-4">
            <form action={formAction}
                  className='flex flex-col items-center px-8 gap-4 w-96 m-auto py-8 bg-white rounded-2xl mt-20'>
                <legend className='text-2xl'>Login to your account</legend>
                <label htmlFor='username'>Enter your username</label>
                <input className='border-2 border-black py-2 w-full' id='username' type='text'
                       autoComplete={'on'} placeholder='Username' name='username' required/>
                <label htmlFor='password'>Enter your password</label>
                <input className='border-2 border-black w-full py-2' id='password' type='password' autoComplete='on'
                       name='password'
                       required/>
                <button className='btn' type="submit" disabled={isPending}>Login</button>
            </form>
            <p>Don`t have account yet? <Link className='text-white hover:underline' href='/register'>Sign Up</Link></p>
            {errorMessage && (
                <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500"/>
                    <p className="text-sm text-red-500">{errorMessage}</p>
                </>
            )}
        </div>
    )
}

export default LoginForm;