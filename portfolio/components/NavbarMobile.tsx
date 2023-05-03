import { IoClose } from "react-icons/Io5";
import NavbarItem from "./NavbarItem";
import { FC, useCallback, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineDownload } from "react-icons/ai";
import { MdDesktopWindows } from "react-icons/md";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/Bs";

interface NavbarMobileProps{
    showBackground: boolean;
    onClick: () => void;
    theme?: string;
    setTheme: (theme: string) => void;

}


const NavbarMobile: FC<NavbarMobileProps> = ({
    showBackground,
    onClick,
    theme,
    setTheme
}) => {

    const [ variantMobileMenuContent, setVariantMobileMenuContent ] = useState(false);


    const toggleMobileMenu = useCallback(() => {
        setVariantMobileMenuContent((current) => !current);
    }, []);


    useEffect(() => {

        let lasScreenSize = window.innerWidth;

        const handleScreenSize = () => {

            if(lasScreenSize >= 1024){
                setVariantMobileMenuContent(false);
            }

            lasScreenSize = window.innerWidth;
        }

        window.addEventListener('resize', handleScreenSize);

        return () => {
            window.removeEventListener('resize', handleScreenSize);
        }
    }, []);

    useEffect(()=>{

        if(variantMobileMenuContent){
            document.body.classList.add('overflow-hidden');
            
        }else{
            document.body.classList.remove('overflow-hidden');
        }


    },[variantMobileMenuContent]);



    return(
            <div className={`
                ${!variantMobileMenuContent ? 
                    'p-6 top-0 fixed right-0 block lg:hidden w-full items-center items-right bg-opacity-50' 
                : 
                    'top-0 fixed lg:hidden right-0 block w-full h-full z-50 bg-opacity-100 bg-white dark:bg-slate-700'
                }
                ${showBackground && !variantMobileMenuContent ? 'bg-slate-500 text-[#DDD0C8] z-50 opacity-80' : ''}
            `}
            >
                <div className={`
                    fixed
                    top-1
                    text-xl  
                    lg:py-6
                    lg:px-8
                    px-6
                    py-6
                    font-semibold`}
                >
                    {showBackground ? 
                        <img className={`h-10 ${variantMobileMenuContent && 'hidden'}`} src={`${theme === 'dark' ? '/images/logoDarkTab.png' : '/images/logoLight.png'}`} alt="logo-portfolio"/>
                    :
                    
                    <p className={`flex flex-row gap-4 text-slate-500 dark:text-teal-200 ${variantMobileMenuContent && 'hidden'}`}>
                        Marlene Condesso
                    </p>
                    }
                </div>
                {!variantMobileMenuContent ?
                    <div onClick={toggleMobileMenu} className={`
                        cursor-pointer 
                        ${showBackground ? 'text-white dark:text-teal-200 dark:text-opacity-100' : 'text-slate-500 dark:text-teal-200'} 
                        float-right 
                        mr-4`}
                    >
                        <FiMenu size={30} /> 
                    </div> 
                :
                    <div className={`${!variantMobileMenuContent ? 'translate-x-80' : 'translate-x-0'}
                        w-full
                        lg:hidden
                        flex
                        flex-col 
                        gap-10
                        top-0
                        rounded-sm
                        p-3`}
                    >
                    
                        <IoClose size={36} className="cursor-pointer text-gray-600 dark:text-teal-400" onClick={toggleMobileMenu}/> 
                        <NavbarItem to="#" label="Home" onClick={toggleMobileMenu} /> 
                        <NavbarItem to="#about" label="About" onClick={toggleMobileMenu} /> 
                        <NavbarItem to="#projects" label="Projects" onClick={toggleMobileMenu} /> 
                        <NavbarItem to="#contact" label="Contact" onClick={toggleMobileMenu}/> 
                        <a onClick={onClick} href="#"className="
                            flex
                            hover:text-black
                            hover:underline
                            dark:text-teal-400
                            dark:hover:text-gray-400
                            underline-offset-8
                            text-slate-700
                            border-white
                            justify-center
                            px-4
                            h-10
                            mx-1
                            rounded-md
                            items-center
                            transition
                            duration-75
                            cursor-pointer
                            flex
                            flex-row
                            font-semibold"
                        >
                            Download CV
                            <AiOutlineDownload size={20}/>
                        </a>
                        <div className={`
                            lg:hidden
                            fixed
                            right-4
                            bg-gray-400
                            opacity-60
                            p-2
                            dark:bg-teal-800
                            dark:bg-opacity-60
                            rounded-xl
                            flex
                            duration-300
                            gap-4`}
                        >
                            <button onClick={() => {setTheme('light')} }
                            className={`
                                ${theme === 'light' ? 'text-[#DDD0C8]' : 'text-white'}
                                dark:hover:text-teal-400 
                                cursor-pointer
                            `}    
                            >
                                <BsFillSunFill size={20}/>
                            </button>
                            <button onClick={() => {setTheme('dark')}} 
                            className={`
                                ${theme === 'dark' ? 'text-teal-500' : 'text-white'}
                                dark:hover:text-teal-500 
                                hover:text-teal-900    
                                cursor-pointer
                            `}
                            >
                                <BsFillMoonFill size={18}/>
                            </button>
                            <button onClick={() => {setTheme('system')}}
                                className={`
                                    ${theme === 'dark' ? 'text-teal-500' : 'text-white'}
                                    hover:text-teal-900  
                                    dark:hover:text-teal-500
                                    cursor-pointer  
                                `}
                            >
                                <MdDesktopWindows size={20}/>
                            </button>
                        </div> 
                    </div>
                }
            </div>
    );
}

export default NavbarMobile;