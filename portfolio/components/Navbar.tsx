import { AiOutlineDownload } from 'react-icons/ai';
import NavbarItem from "./NavbarItem";
import NavbarTheme from "./NavbarTheme";
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState, FC } from 'react';
import { Document, Page, pdfjs } from "react-pdf";

interface NavbarProps {

    showBackgroundNav: boolean;
    hiddenNav: boolean;
    theme: string;
    onDownloadCV: () => void;
    onTheme: (theme: string) => void;
}

const Navbar: FC<NavbarProps> =  ({
    showBackgroundNav,
    hiddenNav,
    theme,
    onDownloadCV,
    onTheme
}) => {

    const [pages, setPages] = useState(null);

    const onDocumentLoadSuccess = (e: any) => {
        setPages(e);
    }
    
    pdfjs.GlobalWorkerOptions.workerSrc =`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
                justify-center 
                items-center
                lg:pr-8
                z-[1]
                `}
            >
                <div className={`
                    hidden
                    text-lg  
                    lg:px-8
                    lg:flex
                    px-6
                    py-6
                    font-semibold`}
                >

                    {showBackgroundNav ?
                        <img src={`${theme === 'dark' ? '/images/logoDarkTab.png' : '/images/logoWhite.png'} `} className="h-16 left-8 fixed top-1" />
                        :
                        <p className="text-white fixed left-8 top-7 dark:text-teal-200 xl:text-lg lg:text-base"> Marlene Condesso</p>
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
                        <NavbarItem trigger="home" to="home" label="Home" showBackground={showBackgroundNav} />
                        <NavbarItem trigger="about" to="about" label="About" showBackground={showBackgroundNav} />
                        <NavbarItem trigger="experience" to="experience" label="Experience" showBackground={showBackgroundNav} />
                        <NavbarItem trigger="projects" to="projects" label="Projects" showBackground={showBackgroundNav}/>
                        <NavbarItem trigger="contact" to="contact" label="Contact" showBackground={showBackgroundNav} />
                    </div>
                </div>
               
                <Popover>
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={`
                                    ${open ? '' : 'text-opacity-90'}
                                    text-slate-800 
                                    focus-visible:outline-none
                                    dark:focus:underline-offset-8
                                    dark:focus:underline
                                    dark:focus:text-teal-200
                                    hover:text-white 
                                    dark:text-white 
                                    dark:hover:text-teal-200 
                                    hover:underline 
                                    underline-offset-8
                                    fixed
                                    top-5
                                    right-40
                                    lg:flex
                                    hidden
                                    px-2
                                    2xl:px-20
                                    xl:px-10
                                    lg:h-[5%]
                                    rounded-md
                                    items-center
                                    justify-center                     
                                    gap-2 
                                    transition
                                    duration-75
                                    cursor-pointer
                                    lg:flex-row
                                    font-semibold
                                    text-sm`}
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
                                        <button className='bg-white bg-opacity-25 w-44 h-16 text-white font-semibold text-base rounded-xl flex flex-row items-center justify-center gap-2 hover:bg-slate-400 hover:bg-opacity-100' onClick={onDownloadCV}>Download <AiOutlineDownload size={20} /></button>
                                    </div>
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-auto scroll-smooth max-h-[800px] dark:scrollbar-track-teal-500 dark:scrollbar-thumb-slate-600 scrollbar-thumb-rounded-lg scrollbar-thin scrollbar-track-[#DDD0C8] scrollbar-thumb-gray-500 w-full h-full mt-40">
                                        <Document file="/files/CVMarleneLima.pdf" onLoadSuccess={(e) => onDocumentLoadSuccess(e)} onLoadError={console.error}>
                                            {Array.from(new Array(pages), (el, index) => (
                                                <Page key={`page_${index + 1}`} pageNumber={index + 1} width={typeof window !== 'undefined' &&  window.innerWidth > 1000 ? 900 : 700 }/>
                                            ))}
                                        </Document>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            
            <div className="
                    hidden
                    lg:flex
                    fixed
                    right-8
                    bg-white
                    opacity-60
                    max-lg:top-5
                    max-lg:right-20
                    p-2
                    dark:bg-teal-800
                    dark:bg-opacity-60
                    rounded-xl
                    duration-300
                    gap-4"
            >
                <NavbarTheme onTheme={(res) => onTheme(res)} theme={theme} />
            </div>

        </nav >
        </>
    );
}

export default Navbar;
