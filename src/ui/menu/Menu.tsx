'use client';

import Link from "next/link";
import './Menu.css';
import {getDictionary} from "@/i18n.config";
import {usePathname} from "next/navigation";

const Menu = ({dictionary}: { dictionary: Awaited<ReturnType<typeof getDictionary>>["menu"] }) => {
    const pathname = usePathname()
    console.log({pathname});

    return (
        <ul className='menu'>
            <li className='menu-item'>
                <Link className={`${pathname} === '/en' ? 'active' : ''}`} href={'/'}>{dictionary.home}</Link>
            </li>
            <li className='menu-item'>
                <Link href={'/dashboard'}>{dictionary.dashboard}</Link>
            </li>
        </ul>
    )
};

export default Menu;