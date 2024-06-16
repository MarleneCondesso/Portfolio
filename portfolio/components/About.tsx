import { AiOutlineGift } from "react-icons/ai";
import Heading from "./Heading";
import { FiBookOpen } from "react-icons/fi";
import { TbPacman } from "react-icons/tb";
import { BsGlobe2 } from "react-icons/bs";
import { IoLocateOutline } from "react-icons/io5";
import { useActiveMenu } from "react-active-menu";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
const About = () => {
    const { t } = useTranslation(['translationAboutMe']);
    const subTitleAboutMe: string = t('about-me-subtitle');


    const scrollTo = () => {
        window.scrollTo({
            top: 6500,
            behavior: 'smooth'
        })
    }

    return (
        <section id="about" className={`mb-44 flex flex-col lg:gap-20 `}>
            <Heading title={t('about-me-title')}/>
            <div className="grid grid-cols-1 
                            xl:grid-cols-2 
                            gap-32 
                            items-center 
                            justify-center 
                            self-center 
                            bg-white
                            dark:bg-slate-500 
                            dark:bg-opacity-25 
                            lg:p-20
                            p-6 
                            bg-opacity-25 
                            2xl:rounded-tr-[10rem] 
                            2xl:rounded-tl-[15rem] 
                            2xl:rounded-bl-[10rem] 
                            2xl:rounded-br-[15rem] 
                            lg:rounded-tr-[10rem] 
                            lg:rounded-bl-[15rem]
                            rounded-t-[5rem]
                            rounded-b-[5rem] ">
                <div className="flex h-auto justify-center items-center w-full pt-10">
                    <div className="relative xl:max-h-[30rem] max-h-72 cursor-pointer transition duration-200 hover:scale-95 
                            animate-pulse-slow">
                        <img src="/images/profile.jpg" alt="profile-hero"
                            className="
                            2xl:max-h-60 
                            sm:max-h-52
                            max-h-28
                            z-10  
                            rounded-md 
                            relative 
                            dark:grayscale 
                            dark:hover:grayscale-0 
                            peer"
                        />
                        <div className="
                            absolute 
                            border-4 
                            dark:border-slate-800
                            border-[var(--secondary-color-light)]
                            h-full 
                            w-full 
                            2xl:max-h-80
                            lg:max-h-72
                            md:max-h-64 
                            sm:max-h-64
                            max-h-36
                            top-4
                            left-4
                            rounded-md
                            peer-hover:border-[var(--icon-color-light)]
                            dark:peer-hover:border-teal-400"
                        >{" "}</div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-between mb-3 gap-10 text-sm text-slate-700 dark:text-white">
                        <div className="flex flex-row gap-3 font-medium">
                            <div className="flex flex-col gap-6 ">
                                <div className="flex gap-4 items-center">
                                    <AiOutlineGift className="text-[var(--icon-color-light)]  dark:text-teal-400" />
                                    {t('about-me-birthday')}
                                </div>
                                <div className="flex gap-4 items-center">
                                    <FiBookOpen className="text-[var(--icon-color-light)] dark:text-teal-400" />
                                    {t('about-me-study')}
                                </div>
                                <div className="flex gap-4 items-center ">
                                    <TbPacman className="text-[var(--icon-color-light)] dark:text-teal-400" />
                                    {t('about-me-interest')}
                                </div>
                                <div className="flex gap-4 items-center">
                                    <IoLocateOutline className="text-[var(--icon-color-light)]  dark:text-teal-400" />
                                    {t('about-me-location')}
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 lg:gap-6 ">
                            <p>07-12-1997</p>
                            <p>ISEP *</p>
                            <p>{t("about-me-interest-text")}</p>
                            <p>Porto, Portugal</p>
                        </div>
                    </div>
                    <span className="text-white dark:text-teal-400 text-[10px] md:text-xs">* ISEP - Instituto Superior de Engenharia do Porto</span>
                    <div className="mt-8 gap-3 flex flex-col items-center">
                        <h2 className="font-semibold text-[var(--icon-color-light)] dark:text-white md:text-lg text-base text-center">{subTitleAboutMe}</h2>
                        <p className="text-slate-700 dark:text-white items-center flex max-w-xl text-justify text-xs 2xl:leading-loose xl:leading-loose lg:leading-loose md:leading-loose sm:leading-loose leading-loose mb-4 p-5 whitespace-break-spaces">
                            {t('about-me-text')}
                        </p>
                        <a onClick={scrollTo} id="hireMe" className={` 
                            
                            bg-[var(--icon-color-light)]
                            hover:bg-slate-100
                            hover:text-slate-900
                            dark:bg-slate-600
                            text-slate-700
                            dark:text-teal-500
                            dark:hover:text-slate-100
                            font-bold
                            lg:rounded-xl
                            text-base
                            p-2
                            rounded 
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                            animate-bounc`} >
                            {t('about-me-button')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About;
