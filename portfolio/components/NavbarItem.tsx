import { HashLink as Link } from 'react-router-hash-link';
import { FC } from "react";

interface NavbarItemProps{
    to: string;
    label: string;
    showBackground?: boolean;
    onClick?: () => void;
}

const NavbarItem: FC<NavbarItemProps> = ({
    to,
    label,
    showBackground,
    onClick
}) => {

    return(
            <div>
                <a href={to} onClick={onClick} className={`
                ${!showBackground && 'lg:text-white hover:text-gray-400'}
                text-[#DDD0C8]
                hover:underline
                underline-offset-8 
                items-center 
                justify-center 
                flex 
                lg:px-0 
                px-[50%]
                font-semibold 
                hover:text-gray-100 
                cursor-pointer 
                transition-shadow
                lg:z-[1]`}>
                    {label}
                </a> 
            </div>
    );
}

export default NavbarItem;