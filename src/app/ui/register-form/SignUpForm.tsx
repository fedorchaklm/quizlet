import Link from "next/link";
// import clsx from 'clsx';

const SignUpForm = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <form className='flex flex-col items-center px-8 gap-4 w-96 m-auto py-8 bg-white rounded-2xl mt-20'>
                <legend className='text-2xl text-center'>Sign Up to your account</legend>
                <label htmlFor='username'>Enter your username</label>
                <input className='border-2 border-black py-2 w-full' id='username' type='text'
                       autoComplete={'on'} placeholder='Username' required/>
                <label htmlFor='password'>Enter your password</label>
                <input className='border-2 border-black w-full py-2' id='password' type='password' autoComplete='on'
                       required/>
                <label htmlFor='passwordRepeat'>Confirm your password</label>
                <input className='border-2 border-black w-full py-2' id='passwordRepeat' type='password' autoComplete='on'
                       required/>
                {/*<div className={clsx({'bg-red-300 text-3xl' : status === 'red', 'bg-black text-3xl' : status === 'black' })}>dfjgk</div>*/}
                <button className='btn' type="submit">Sign Up</button>
            </form>
            <p>Already have account? <Link className='text-white hover:underline' href='/login'>Sign In</Link></p>
        </div>
    )
}

export default SignUpForm;