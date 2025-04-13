'use client';

import {useChangeTheme} from "@/context/ThemeContext";

const ChangeThemeButton = () => {
    const changeTheme = useChangeTheme();
    return (
        <div>
            <button className='btn-special' onClick={() => changeTheme}>Theme</button>
        </div>
    );
};

export default ChangeThemeButton;