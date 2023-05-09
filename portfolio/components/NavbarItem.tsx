import { FC, useState } from "react";
import { useActiveMenu } from "react-active-menu";
import classNames from "classnames";
import { useRef } from "react";


interface NavbarItemProps{
    to: string;
    label: string;
    showBackground?: boolean;
    onClick?: () => void;
    trigger: string;
}

const NavbarItem: FC<NavbarItemProps> = ({
    to,
    label,
    showBackground,
    onClick,
}) => {

    const height = useState(typeof window !== 'undefined' && window.innerHeight);

    const scrollToUp = () => {
        if(to === '#home'){
            scrollTo(0);
        } else
        if(to === '#about'){
            if(parseInt(height.toString()) >= 1000) {
                scrollTo(1590);
            }else{ 
                scrollTo(700);
            }
        } else
        if(to === '#projects'){
            if(parseInt(height.toString()) >= 1000) {
                scrollTo(4900);
            }else{ 
                scrollTo(4000);
            }
            
        } else
        if(to === '#contact'){
            if(parseInt(height.toString()) >= 1000) {
                scrollTo(6000);
            }else{ 
                scrollTo(5500);
            }
            
        }
        
      }
    const scrollTo = (top: number) => {
        window.scrollTo({
            top: top,
            behavior: 'smooth'
          })
    }
    return(
            <div>
                <button type="button" onClick={() => {onClick!(); scrollToUp();}} 
                className={`
                text-white
                hover:text-slate-800
                dark:lg:text-teal-200
                dark:hover:text-white
                dark:text-teal-400
                2xl:text-2xl
                xl:text-xl
                lg:text-lg
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
                lg:z-[1]`}
                >
                    {label}
                </button> 
            </div>
    );
}

export default NavbarItem;
