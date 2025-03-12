import Link from "next/link";
import './Menu.css';

const Menu = () => {
    return (
        <ul className='menu'>
            <li className='menu-item'>
                <Link href={'/'}>Home</Link>
            </li>
            <li className='menu-item'>
                <Link href={'/dashboard'}>Dashboard</Link>
            </li>
        </ul>
    )
};

export default Menu;