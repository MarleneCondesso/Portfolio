import { FC } from "react";

interface NavbarItemProps {
    to: string;
    label: string;
    showBackground?: boolean;
    closeMenu?: () => void;
    trigger: string;
}

const NavbarItem: FC<NavbarItemProps> = ({
    to,
    label,
    closeMenu,
}) => {

    const handleScrollWithAnimation = () => {
        var element = document.getElementById(to);
        element?.classList.add('animate-container');
    }

    return (
            <a href={`#${to}`} type="button" onClick={closeMenu}
                className={`
                text-white
                hover:text-slate-800
                dark:lg:text-teal-200
                dark:hover:text-white
                dark:text-teal-400
                xl:text-base
                text-xs
                active:text-slate-800
                hover:underline
                focus:underline
                focus:underline-offset-8
                underline-offset-8 
                items-center 
                justify-center 
                flex 
                lg:px-0 
                px-[40%]
                font-semibold 
                cursor-pointer 
                transition-shadow
                lg:z-[1]
                scroll-smooth
                `}
            >
                {label}
            </a>
    );
}

export default NavbarItem;
