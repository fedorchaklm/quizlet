import Link from "next/link";
import './Menu.css';
import {getDictionary} from "@/i18n.config";

const Menu = ({ dictionary }:  { dictionary: Awaited<ReturnType<typeof getDictionary>>["menu"] }) => {
    return (
        <ul className='menu'>
            <li className='menu-item'>
                <Link href={'/'}>{dictionary.home}</Link>
            </li>
            <li className='menu-item'>
                <Link href={'/dashboard'}>{dictionary.dashboard}</Link>
            </li>
        </ul>
    )
};

export default Menu;