import { IoClose } from "react-icons/io5";
import NavbarItem from "./NavbarItem";
import { FC, Fragment, useCallback, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineDownload } from "react-icons/ai";
import { MdDesktopWindows } from "react-icons/md";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import NavbarTheme from "./NavbarTheme";
import pages from "@/pages";
import { Popover, Transition } from "@headlessui/react";
import { Document, Page, pdfjs } from 'react-pdf'
import iconUSA from '../public/icon/liberia.png';
import iconPT from '../public/icon/portugal.png';
import { useTranslation } from "react-i18next";
import PanelCV from "./PanelCV";
import NavbarLanguage from "./NavbarLanguage";

interface NavbarMobileProps {
    showBackgroundNav: boolean;
    hiddenNav: boolean;
    theme: string;
    onDownloadCV: () => void;
    onTheme: (theme: string) => void;
    setLanguage: (language: string) => void;
    language: string;
}


const NavbarMobile: FC<NavbarMobileProps> = ({
    showBackgroundNav,
    hiddenNav,
    theme,
    onDownloadCV,
    onTheme,
    setLanguage,
    language
}) => {

    pdfjs.GlobalWorkerOptions.workerSrc =`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const { t } = useTranslation(['translationNavbar']);
    const [variantMobileMenuContent, setVariantMobileMenuContent] = useState(false);


    const [pages, setPages] = useState(null);


    const toggleMobileMenu = useCallback(() => {
        
        setVariantMobileMenuContent((current) => !current);
    }, []);


    useEffect(() => {

        let lasScreenSize = window.innerWidth;

        const handleScreenSize = () => {

            if (lasScreenSize >= 1024) {
                setVariantMobileMenuContent(false);
            }

            lasScreenSize = window.innerWidth;
        }

        window.addEventListener('resize', handleScreenSize);

        return () => {
            window.removeEventListener('resize', handleScreenSize);
        }
    }, []);

/*     useEffect(() => {

        if (variantMobileMenuContent) {
            document.body.classList.add('overflow-y-hidden');

        } else {
            document.body.classList.remove('overflow-y-hidden');
        }


    }, [variantMobileMenuContent]); */


    const onDocumentLoadSuccess = (e: any) => {
        setPages(e.numPages);
    }

    return (
        <div className={`
                ${!variantMobileMenuContent ?
                'p-6 top-0 fixed right-0 block lg:hidden w-full items-center items-right bg-opacity-50'
                :
                'top-0 fixed lg:hidden right-0 block w-full h-full z-50 bg-opacity-100 dark:bg-slate-700 bg-[var(--secondary-color-light)]'
                }
                ${hiddenNav && 'hidden'}
                ${showBackgroundNav && !variantMobileMenuContent ? 'bg-slate-700 dark:bg-slate-700 text-[#DDD0C8] z-50 opacity-80' : ''}
            `}
        >
            <div className={`
                    fixed
                    top-1
                    text-lg  
                    lg:py-6
                    lg:px-8
                    px-6
                    py-6
                    font-semibold
                    ${variantMobileMenuContent && 'hidden'}`}
            >
                {showBackgroundNav ?
                    <img className={`h-16 top-1 fixed left-8 `} src={`${theme === 'dark' ? '/images/logoDarkTab.png' : '/images/logoWhite.png'}`} alt="logo-portfolio" />
                    :

                    <p className={`flex flex-row gap-4 text-[var(--icon-color-light)] dark:text-teal-200`}>
                        Marlene Condesso
                    </p>
                }
            </div>
            {!variantMobileMenuContent ?
                <div onClick={toggleMobileMenu} className={`
                        cursor-pointer 
                        text-[var(--icon-color-light)] dark:text-teal-200 dark:text-opacity-100 
                        float-right 
                        mr-4`}
                >
                    <FiMenu size={30} />
                </div>
                :
                <div className={`${!variantMobileMenuContent ? 'translate-x-80' : 'translate-x-0'}
                        w-full
                        h-full
                        lg:hidden
                        flex
                        flex-col 
                        gap-10
                        top-0
                        rounded-sm
                        p-3`}
                >

                    <IoClose size={44} className="cursor-pointer text-[var(--icon-color-light)] dark:text-teal-400" onClick={toggleMobileMenu} />
                    <div className="flex flex-col items-center justify-center h-full w-full gap-10 text-base">
                        <NavbarItem trigger="home" to="home" label={t('home')} closeMenu={toggleMobileMenu} />
                        <NavbarItem trigger="about" to="about" label={t('about')} closeMenu={toggleMobileMenu} />
                        <NavbarItem trigger="experience" to="experience" label={t('experience')} closeMenu={toggleMobileMenu} />
                        <NavbarItem trigger="projects" to="projects" label={t('projects')} closeMenu={toggleMobileMenu} />
                        <NavbarItem trigger="contact" to="contact" label={t('contact')} closeMenu={toggleMobileMenu} />

                       <PanelCV t={(res) => t(res)} theme={theme}/> 
                    </div>
                    <div className="
                            lg:hidden
                            fixed
                            right-4
                            bg-white
                            bg-opacity-60
                            p-2
                            dark:bg-slate-500
                            rounded-xl
                            flex
                            duration-300"
                    >
                        <NavbarTheme onTheme={(res) => onTheme(res)} theme={theme} />
                        <NavbarLanguage theme={theme}/>
                    </div>
                </div>
            }
        </div>
    );
}

export default NavbarMobile;