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


interface NavbarMobileProps {
    showBackgroundNav: boolean;
    hiddenNav: boolean;
    theme: string;
    onDownloadCV: () => void;
    onTheme: (theme: string) => void;

}


const NavbarMobile: FC<NavbarMobileProps> = ({
    showBackgroundNav,
    hiddenNav,
    theme,
    onDownloadCV,
    onTheme
}) => {

    pdfjs.GlobalWorkerOptions.workerSrc =`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

    useEffect(() => {

        if (variantMobileMenuContent) {
            document.body.classList.add('overflow-y-hidden');

        } else {
            document.body.classList.remove('overflow-y-hidden');
        }


    }, [variantMobileMenuContent]);


    const onDocumentLoadSuccess = (e: any) => {
        setPages(e.numPages);
    }

    return (
        <div className={`
                ${!variantMobileMenuContent ?
                'p-6 top-0 fixed right-0 block lg:hidden w-full items-center items-right bg-opacity-50'
                :
                'top-0 fixed lg:hidden right-0 block w-full h-full z-50 bg-opacity-100 dark:from-teal-950 dark:via-slate-800 dark:to-slate-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500'
                }
                ${hiddenNav && 'hidden'}
                ${showBackgroundNav && !variantMobileMenuContent ? 'bg-slate-500 text-[#DDD0C8] z-50 opacity-80' : ''}
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

                    <p className={`flex flex-row gap-4 text-white dark:text-teal-200`}>
                        Marlene Condesso
                    </p>
                }
            </div>
            {!variantMobileMenuContent ?
                <div onClick={toggleMobileMenu} className={`
                        cursor-pointer 
                        text-white dark:text-teal-200 dark:text-opacity-100 
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

                    <IoClose size={36} className="cursor-pointer text-white dark:text-teal-400" onClick={toggleMobileMenu} />
                    <div className="flex flex-col items-center justify-center h-full w-full gap-10 text-base">
                        <NavbarItem trigger="home" to="#home" label="Home" onClick={toggleMobileMenu} />
                        <NavbarItem trigger="about" to="#about" label="About" onClick={toggleMobileMenu} />
                        <NavbarItem trigger="projects" to="#projects" label="Projects" onClick={toggleMobileMenu} />
                        <NavbarItem trigger="contact" to="#contact" label="Contact" onClick={toggleMobileMenu} />

                        <Popover>
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={`
                                    ${open ? '' : 'text-opacity-90'}
                                    text-slate-800 
                                    hover:text-white 
                                    dark:text-white 
                                    dark:hover:text-teal-200 
                                    border-white
                                    justify-center
                                    items-center
                                    h-10
                                    w-full
                                    ml-5
                                    rounded-md
                                    transition
                                    duration-75
                                    cursor-pointer
                                    flex
                                    flex-row
                                    font-semibold`}
                                    >
                                        <span>Preview CV</span>

                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute left-1/2 top-24 z-10 mt-3 w-auto h-[40rem] -translate-x-1/2 transform px-4 sm:px-0 flex items-center justify-center">
                                            <div className='fixed top-0 mb-10'>
                                                <button className='bg-white bg-opacity-25 w-44 h-16 text-slate-800 font-semibold text-lg rounded-xl flex flex-row items-center justify-center gap-2' onClick={onDownloadCV}>Download <AiOutlineDownload size={20} /></button>
                                            </div>
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll scroll-smooth max-h-[800px] dark:scrollbar-track-teal-500 dark:scrollbar-thumb-slate-600 scrollbar-thumb-rounded-lg scrollbar-thin scrollbar-track-[#DDD0C8] scrollbar-thumb-gray-500 w-full h-full mt-40">
                                                <Document file="/files/CVMarleneLima.pdf" onLoadSuccess={(e: any) => onDocumentLoadSuccess(e)}>
                                                    {Array.from(new Array(pages), (el, index) => (
                                                        <Page key={`page_${index + 1}`} pageNumber={index + 1} width={typeof window !== 'undefined' && window.innerWidth > 700 ? 900 : 400} />
                                                    ))}
                                                </Document>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </div>
                    <div className="
                            lg:hidden
                            fixed
                            right-4
                            bg-white
                            opacity-60
                            p-2
                            dark:bg-teal-800
                            dark:bg-opacity-60
                            rounded-xl
                            flex
                            duration-300
                            gap-4"
                    >
                        <NavbarTheme onTheme={(res) => onTheme(res)} theme={theme} />
                    </div>
                </div>
            }
        </div>
    );
}

export default NavbarMobile;