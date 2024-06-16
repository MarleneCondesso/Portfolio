import { FC } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { MdDesktopWindows } from "react-icons/md";

interface NavbarThemeProps {
    onTheme: (theme: string) => void;
    theme: string;

}

const NavbarTheme: FC<NavbarThemeProps> = ({ onTheme, theme }) => {

    return (

        <div className="right-4 opacity-90 p-2 rounded-xl flex duration-300 gap-4">
            {theme === 'dark' ? 
                <button onClick={() => onTheme('light')} className="text-[var(--secondary-color-light)] dark:hover:text-[var(--secondary-color-light)] cursor-default dark:cursor-pointer dark:text-slate-800">
                    <BsFillSunFill size={20} />
                </button>
                :
                <button onClick={() => onTheme('dark')} className={`text-slate-800 dark:cursor-default dark:text-teal-500 hover:text-teal-500 cursor-pointer`}>
                    <BsFillMoonFill size={16} />
                </button>
            }
            <button onClick={() => onTheme('system')} /* className={`light:text-black opacity-100  hover:text-black text-slate-800 cursor-pointer `} */ /* className={`${theme === 'light' ? 'text-yellow-500' : 'text-teal-500'}`} */ className={`light:text-white ${theme === 'light' ? 'hover:text-[var(--secondary-color-light)] light:cursor-default dark:cursor-pointer' : 'dark:hover:text-teal-500 dark:cursor-default light:cursor-pointer'}`}>
                <MdDesktopWindows size={20} />
            </button>
        </div>
    );

}

export default NavbarTheme;