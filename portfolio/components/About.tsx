import { AiOutlineGift } from "react-icons/ai";
import Heading from "./Heading";
import { FiBookOpen } from "react-icons/fi";
import { TbPacman } from "react-icons/tb";
import { BsGlobe2 } from "react-icons/bs";
import { IoLocateOutline } from "react-icons/io5";
import { useActiveMenu } from "react-active-menu";
import { useState } from "react";

const About = () => {

    const subTitleAboutMe: string = "I'm Marlene and Frontend Developer";

    const scrollTo = () => {
        window.scrollTo({
            top: 6500,
            behavior: 'smooth'
          })
    }
    
    return (
        <section id="about" className="mb-44 flex flex-col gap-32">
            <Heading title="About me" />
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
                            2xl:rounded-br-[20rem] 
                            lg:rounded-tr-[10rem] 
                            lg:rounded-bl-[20rem]
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
                            peer-hover:border-purple-500
                            dark:peer-hover:border-teal-400"
                        >{" "}</div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center text-white justify-between mb-3 gap-10 text-xs">
                        <div className="flex flex-row gap-3 text-white font-medium">
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-4 items-center">
                                    <AiOutlineGift className="md:text-purple-500 text-slate-700 dark:text-teal-400" />
                                    Birthday
                                </div>
                                <div className="flex gap-4 items-center">
                                    <FiBookOpen className="md:text-purple-500 text-slate-700 dark:text-teal-400" />
                                    Study
                                </div>
                                <div className="flex gap-4 items-center">
                                    <BsGlobe2 className="md:text-purple-500 text-slate-700 dark:text-teal-400" />
                                    Website
                                </div>
                                <div className="flex gap-4 items-center">
                                    <TbPacman className="md:text-purple-500 text-slate-700 dark:text-teal-400" />
                                    Interest
                                </div>
                                <div className="flex gap-4 items-center">
                                    <IoLocateOutline className="md:text-purple-500 text-slate-700 dark:text-teal-400" />
                                    Location
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 lg:gap-6">
                            <p>07-12-1997</p>
                            <p>ISEP *</p>
                            <p>www.isep.pt</p>
                            <p>Reading & Games</p>
                            <p>Porto, Portugal</p>
                        </div>
                    </div>
                    <span className="text-slate-700 dark:text-teal-400 text-[10px] md:text-base">* ISEP - Instituto Superior de Engenharia do Porto</span>
                    <div className="mt-8 gap-3 flex flex-col items-center">
                        <h2 className="font-semibold text-slate-900 md:text-lg text-base text-center">{subTitleAboutMe}</h2>
                        <p className="text-white items-center flex max-w-xl text-justify text-xs 2xl:leading-loose xl:leading-loose lg:leading-loose md:leading-loose sm:leading-loose leading-loose mb-4">
                            Hi! My name is Marlene Condesso and i am a Web Developer. My first time coding was in 2020, when I took my Course based on 'Agile Software Development'.<br></br>
                            After that, my passion on coding, my focus on creating new things, facing new challenges and my will to keep learning increased.<br></br>
                            I can title myself as a baby on tech area, after all i only had one experience as a web developer.
                            My main objective is to increase more and more professionally and personally,
                            let me do it with you.
                        </p>
                        <a onClick={scrollTo} id="hireMe" className="
                            bg-white
                            dark:bg-slate-600
                            text-slate-800 
                            dark:text-teal-500
                            hover:bg-opacity-60
                            dark:hover:bg-teal-500
                            dark:hover:text-slate-100
                            font-bold
                            lg:w-28 
                            lg:h-12 
                            lg:rounded-xl
                            text-base
                            md:w-32 
                            md:h-12 
                            sm:w-24 
                            sm:h-10 
                            w-20 
                            h-10 
                            rounded 
                            flex
                            justify-center
                            items-center
                            cursor-pointer
                            animate-bounce-slow
                            "
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About;
