import { FC } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { MdDesktopWindows } from "react-icons/md";

interface NavbarThemeProps {
    onTheme: (theme: string) => void;
    theme: string;

}


const NavbarTheme: FC<NavbarThemeProps> = ({ onTheme, theme }) => {

    return (

        <div className="right-4 bg-white opacity-60 p-1 dark:bg-teal-800 dark:bg-opacity-60 rounded-xl flex duration-300 gap-4">
            <button onClick={() => onTheme('light')} className={`${theme === 'light' ? 'text-yellow-700' : 'text-white'} dark:hover:text-yellow-300 hover:text-yellow-500 cursor-pointer`}>
                <BsFillSunFill size={20} />
            </button>
            <button onClick={() => onTheme('dark')} className={`${theme === 'dark' ? 'text-teal-500' : 'text-purple-500'} dark:hover:text-teal-500 hover:text-teal-900 cursor-pointer`}>
                <BsFillMoonFill size={18} />
            </button>
            <button onClick={() => onTheme('system')} className={`${theme === 'dark' ? 'text-teal-500' : 'text-purple-500'} hover:text-teal-900 dark:hover:text-teal-500 cursor-pointer`}>
                <MdDesktopWindows size={20} />
            </button>
        </div>
    );

}

export default NavbarTheme;