import Image from 'next/image';

const Logo = () => {
    return (
        <Image className='w-10 rounded' src='/assets/min.png' alt='logo' width={50} height={0}/>
    )
};

export default Logo;