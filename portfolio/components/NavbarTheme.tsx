import { FC } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { MdDesktopWindows } from "react-icons/md";

interface NavbarThemeProps {
    onTheme: (theme: string) => void;
    theme: string;

}

const NavbarTheme: FC<NavbarThemeProps> = ({ onTheme, theme }) => {

    return (

        <div className="p-2 rounded-xl flex duration-300">
            {theme === 'dark' ? 
                <button onClick={() => onTheme('light')} className="text-[var(--secondary-color-light)]" title="light" >
                    <BsFillSunFill size={18} />
                </button>
                :
                <button onClick={() => onTheme('dark')} className={`text-slate-800 `} title="dark">
                    <BsFillMoonFill size={16} />
                </button>
            }
        </div>
    );

}

export default NavbarTheme;


/* 
<button onClick={() => onTheme('system')} /* className={`light:text-black opacity-100  hover:text-black text-slate-800 cursor-pointer `} */ /* className={`${theme === 'light' ? 'text-yellow-500' : 'text-teal-500'}`} */ /* className={`light:text-black dark:text-teal-500 ${theme === 'light' ? 'hover:text-[var(--secondary-color-light)] light:cursor-default dark:cursor-pointer' : 'dark:hover:text-teal-500 dark:cursor-default light:cursor-pointer'}`} disabled={theme === 'system'}> *//* 
<MdDesktopWindows size={20} /> *//* 
</button>  */