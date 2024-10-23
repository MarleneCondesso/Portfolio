import { Popover, Transition } from '@headlessui/react';
import React, { Fragment, useState, FC, useEffect } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from "react-pdf";
import iconEnDark from '../public/icon/en-dark.png';
import iconPTDark from '../public/icon/pt-dark.png';
import iconEnLight from '../public/icon/en-light.png';
import iconPTLight from '../public/icon/pt-light.png';
import useDownloader from 'react-use-downloader';
import i18next from 'i18next';
interface PanelCVProps {
    t: (res: string) => any;
    theme: string;
}

const PanelCV: FC<PanelCVProps> = ({
    t,
    theme
}) => {

    const [ pages, setPages ] = useState(null);
    const [ languageCV, setLanguageCV ] = useState(i18next.language);
    const { download } = useDownloader();

    const downloadCV = () => {

        /*    const fileUrl = "/files/CVMarleneLima.pdf";
           const filename = "CVMarleneLima.pdf"; */

        download(languageCV === 'en' ? '/files/Marlene CV - EN.pdf' : '/files/Marlene CV - PT.pdf', languageCV === 'en' ? 'Marlene CV - EN.pdf' : 'Marlene CV - PT.pdf')

    }

    const onDocumentLoadSuccess = (e: any) => {
        setPages(e);
    }


    return (
        <Popover >
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
                                    px-2
                                    2xl:px-20
                                    xl:px-10
                                    rounded-md
                                    items-center
                                    justify-center                     
                                    gap-2 
                                    flex
                                    transition
                                    duration-75
                                    cursor-pointer
                                    font-semibold
                                    text-xs`}
                    >
                        <span>{t('preview-cv')}</span>

                    </Popover.Button>
                    <Popover.Overlay className="fixed inset-0 bg-black opacity-50" />
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200 "
                        enterFrom="opacity-0 translate-y-1 "
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"

                    >
                        <Popover.Panel className="flex flex-col absolute left-1/2 top-24 z-10 w-full -translate-x-1/2 transform px-4 sm:px-0 items-center gap-20 " >
                            <div className='flex flex-col md:flex-row justify-center items-center md:gap-0 gap-5  p-4 dark:bg-slate-500 bg-white bg-opacity-25 rounded-2xl w-1/2 justify-between'>
                            <div>
                            <button className='bg-white bg-opacity-25 w-28 md:w-32 h-10 md:h-12 text-white font-semibold text-md rounded-xl flex flex-row items-center justify-center  gap-2 dark:hover:bg-slate-400 hover:bg-opacity-100' onClick={() => downloadCV()} >Download <AiOutlineDownload size={20} /></button>
                                            
                            </div>
                            <div className='gap-2 flex flex-row'>
                                <button onClick={() => setLanguageCV('pt')} className={`${languageCV === 'pt' ? 'brightness-100 cursor-default' : 'brightness-75 cursor-pointer hover:brightness-100 '}  `}>
                                    {theme === 'light' ?
                                        <img src={iconPTLight.src} alt='pt-light' className={`h-6`} />
                                        :
                                        <img src={iconPTDark.src} alt='pt-dark' className={`h-6`} />}

                                </button>
                                <button onClick={() =>  setLanguageCV('en')} className={`${languageCV === 'en' ? 'brightness-100 cursor-default' : 'brightness-75 cursor-pointer hover:brightness-100 '}`}  >
                                    {theme === 'light' ?
                                        <img src={iconEnLight.src} alt='en-light' className={`h-6 `} />
                                        :
                                        <img src={iconEnDark.src} alt='en-dark' className={`h-6 `} />
                                    }
                                </button>
                                </div>
                            </div>

                            <div className="rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-auto scroll-smooth max-h-[400px] max-w-full dark:scrollbar-track-teal-500 dark:scrollbar-thumb-slate-600 scrollbar-thumb-rounded-lg scrollbar-thin scrollbar-track-[#DDD0C8] scrollbar-thumb-gray-500 flex flex-col items-center justify-items-center" >
                                <Document file={`${languageCV === 'en' ? '/files/Marlene CV - EN.pdf' : '/files/Marlene CV - PT.pdf'}`} onLoadSuccess={(e) => onDocumentLoadSuccess(e)} onLoadError={console.error} className={'w-full h-full'}>
                                    {Array.from(new Array(pages), (el, index) => (
                                        <Page key={`page_${index + 1}`} pageNumber={index + 1} className="w-1/2" />
                                    ))}
                                </Document>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default PanelCV 