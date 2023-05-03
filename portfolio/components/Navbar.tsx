import { FC, useEffect, useState } from "react";
import { AiOutlineDownload } from 'react-icons/ai';
import NavbarItem from "./NavbarItem";
import useDownloader from "react-use-downloader";
import NavbarMobile from "./NavbarMobile";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdDesktopWindows } from "react-icons/md";

interface NavbarProps{
    onTheme:(theme:string) => void;
}


const Navbar: FC<NavbarProps> = ({
    onTheme
}) => {

    const TOP_OFFSET= 20;

    const [showBackground, setShowBackground] = useState(false);
    const [variantMenu, setVariantMenu] = useState(false);
    const { download } = useDownloader();

    const [ theme, setTheme ] = useState(typeof window !== 'undefined' && localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');
    


    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    useEffect(() => {
        let lasSrollY = window.scrollY;
        const handleScrollY = () => {
            if(window.scrollY >= lasSrollY){
                setVariantMenu(true);
            } else {
                setVariantMenu(false);
            }

            lasSrollY = window.scrollY;
        }

        window.addEventListener('scroll', handleScrollY);

        return () => {
            window.removeEventListener('scroll', handleScrollY);
        }
    },[]);


    const downloadCV = () => {
        
        const fileUrl = "/files/CVMarleneLima.pdf";
        const filename = "CVMarleneLima.pdf";

        download(fileUrl, filename)
    
    }
    const onWindowMatch = () => {
        if(typeof window !== 'undefined'){
            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
            if(localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)){
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
        
    }

    useEffect(() => {
        switch (theme) {
            case 'dark':
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case 'light':
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                break;
            default:
                localStorage.removeItem('theme');
                onWindowMatch();
                break;
        }

    },[theme]);


    return(
        <>
            <div className={`h-full w-full
                backdrop-brightness-75
                bg-slate-500/20
                z-10
                lg:hidden
                top-0
                left-0`}>
            </div>

            <nav className={` 
                ${showBackground && 'bg-slate-500 bg-opacity-50 z-[40] transition '}
                ${variantMenu && 'hidden'}
                lg:fixed
                lg:h-16
                w-full
                flex
                flex-column
                justify-center 
                items-center
                lg:pr-8
                z-[1]
                `}
            >
                <div className={`
                    hidden
                    text-xl  
                    lg:px-8
                    lg:flex
                    px-6
                    py-6
                    font-semibold`}
                >

                    {showBackground ?
                       <img src={`${theme === 'dark' ? '/images/logoDarkTab.png' : '/images/logoLight.png'}`} className="h-16 left-8 fixed top-1"/>
                    :
                        <p className="text-slate-500 fixed left-8 top-4 dark:text-teal-200"> Marlene Condesso</p>
                    }
                </div>
                <div className="
                    md:px-16
                    py-2
                    flex-row
                    items-center
                    justify-center
                    transition
                    duration-500
                    bg-opacity-90
                    hidden
                    lg:flex"
                >
                    <div className={`
                        flex-row
                        flex
                        gap-10`}
                    >
                        <NavbarItem to="#" label="Home" showBackground={showBackground}/> 
                        <NavbarItem to="#about" label="About" showBackground={showBackground}/> 
                        <NavbarItem to="#projects" label="Projects" showBackground={showBackground}/> 
                        <NavbarItem to="#contact" label="Contact" showBackground={showBackground}/> 
                    </div>
                </div> 
                <a onClick={downloadCV} href="#"className={`
                    ${!showBackground ? 
                        'hover:text-gray-600 text-slate-500 dark:text-teal-200 hover:underline underline-offset-8 dark:hover:bg-opacity-75 dark:hover:text-white' 
                    : 
                        ' text-gray-600 hover:text-white dark:text-white dark:hover:text-black hover:underline underline-offset-8'
                    }
                    fixed
                    right-40
                    lg:flex
                    hidden
                    px-4
                    lg:h-[5%]
                    rounded-md
                    items-center
                    justify-center
                    gap-2
                    transition
                    duration-75
                    cursor-pointer
                    lg:flex-row
                    font-semibold`}
                >
                    Download CV
                    <AiOutlineDownload size={20}/>
                </a>
                <NavbarMobile showBackground={showBackground} onClick={downloadCV} theme={theme || ''} setTheme={(res)=> setTheme(res)}/>
                <div className={`
                    hidden
                    lg:flex
                    fixed
                    right-8
                    bg-gray-400
                    opacity-60
                    max-lg:top-5
                    max-lg:right-20
                    p-2
                    dark:bg-teal-800
                    dark:bg-opacity-60
                    rounded-xl
                    duration-300
                    gap-4`}
                >
                    <button onClick={() => {setTheme('light'); onTheme('light');} }
                    className={`
                        ${theme === 'light' ? 'text-[#DDD0C8]' : 'text-white'}
                        dark:hover:text-teal-400 
                        cursor-pointer
                    `}    
                    >
                        <BsFillSunFill size={20}/>
                    </button>
                    <button onClick={() => {setTheme('dark'); onTheme('dark');}} 
                    className={`
                        ${theme === 'dark' ? 'text-teal-500' : 'text-white'}
                        dark:hover:text-teal-500 
                        hover:text-teal-900    
                        cursor-pointer
                    `}
                    >
                        <BsFillMoonFill size={18}/>
                    </button>
                    <button onClick={() => {setTheme('system'); onTheme('system');}}
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
            </nav>
      </>
    );
}

export default Navbar;