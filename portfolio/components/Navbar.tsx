import { AiOutlineDownload } from 'react-icons/ai';
import NavbarItem from "./NavbarItem";
import NavbarTheme from "./NavbarTheme";
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState, FC, useEffect } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from 'react-i18next';
import { FaSpinner } from "react-icons/fa";
import PanelCV from './PanelCV';
import NavbarLanguage from './NavbarLanguage';
interface NavbarProps {

    showBackgroundNav: boolean;
    hiddenNav: boolean;
    theme: string;
    onDownloadCV: () => void;
    onTheme: (theme: string) => void;
    setLanguage: (language: string) => void;
    language: string;
}

const Navbar: FC<NavbarProps> = ({
    showBackgroundNav,
    hiddenNav,
    theme,
    onDownloadCV,
    onTheme,
    setLanguage,
    language
}) => {
    const { t } = useTranslation([ 'translationNavbar' ]);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
        <>
            <div className={`h-full w-full
                backdrop-brightness-75
                dark:bg-slate-500/20
                bg-white/20
                z-10
                top-0
                left-0`}>
            </div>

            <nav className={` 
                ${showBackgroundNav && 'dark:bg-slate-500 bg-white shadow-lg dark:bg-opacity-50 bg-opacity-25 z-[1] transition '}
                ${hiddenNav && 'hidden'}
                lg:fixed
                top-0
                right-0
                left-0
                lg:h-20
                w-full
                flex
                flex-column
                justify-between 
                items-center
                lg:pr-8
                z-[1]
                `}
            >
                { /** LOGO */}
                <div className={`
                    hidden
                    text-lg  
                    lg:px-8
                    lg:flex
                    px-6
                    py-6
                    font-semibold
                    mr-20`}
                >

                    {showBackgroundNav ?
                        <img src={`${theme === 'dark' ? '/images/logoDarkTab.png' : '/images/logoWhite.png'} `} className="h-14 left-8 fixed top-4" title='logo' />
                        :
                        <p className="text-white fixed left-8 top-7 dark:text-teal-200 xl:text-lg lg:text-base"> Marlene Condesso</p>
                    }
                </div>
                { /** ITEMS SECTIONS */}
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
                        <NavbarItem trigger="home" to="home" label={t('home')} showBackground={showBackgroundNav} />
                        <NavbarItem trigger="about" to="about" label={t('about')} showBackground={showBackgroundNav} />
                        <NavbarItem trigger="experience" to="experience" label={t('experience')} showBackground={showBackgroundNav} />
                        <NavbarItem trigger="projects" to="projects" label={t('projects')} showBackground={showBackgroundNav} />
                        <NavbarItem trigger="contact" to="contact" label={t('contact')} showBackground={showBackgroundNav} />
                    </div>
                </div>
                { /** CV ITEM */}
                <div className='hidden md:flex'>
                    <PanelCV t={(res) => t(res)} theme={theme} />
                </div>
                { /** THEME / LANGUAGE ITEMS */}
                <div className="
                    hidden
                    lg:flex
                    bg-white
                    bg-opacity-60
                    max-lg:top-5
                    max-lg:right-20
                    p-1
                    dark:bg-slate-500
                    rounded-xl
                    duration-300
                    gap-2"
                >
                    <NavbarTheme onTheme={(res) => onTheme(res)} theme={theme} />
                    <NavbarLanguage theme={theme} />



                </div>


            </nav >
        </>
    );
}

export default Navbar;
