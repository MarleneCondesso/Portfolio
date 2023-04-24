import { AiOutlineGift } from "react-icons/ai";
import Heading from "./Heading";
import { FiBookOpen } from "react-icons/fi";
import { TbPacman } from "react-icons/Tb";
import { BsGlobe2 } from "react-icons/Bs";
import { IoLocateOutline } from "react-icons/Io5";
const About = () => {

    const subTitleAboutMe: string = "I'm Marlene and Frontend Developer";
    const textAboutMe: string = "Hi! My name is Marlene Condesso and i am a Web Developer. My first time coding was in 2020, when i take my Course based on 'Agile Software Development'. After that, my passionate on coding, my focus on create new things or face new challenges and my will to keep learning increased. <br></br> I can titulate myself as a baby on tech area, after all i only had one experience as a web developer. "
    
    return(
        <div id="about" className="
            py-10 
            px-10 
           "
        >
            <Heading title="About me" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center self-center">
                <div className="flex h-auto items-center justify-center w-full">
                    <div className="relative max-h-72 cursor-pointer min-h-[150px] transition duration-500 hover:scale-95">
                        <img src="/images/profile.jpg" alt="profile-hero" 
                        className="
                            min-h-[150px] 
                            min-w-[200px] 
                            max-h-72 
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
                            border-[#DDD0C8]
                            dark:border-slate-800
                            h-full 
                            w-full 
                            max-h-72 
                            top-6 
                            left-8
                            rounded-md
                            dark:peer-hover:border-teal-400"
                        >{" "}</div>
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-between w-72 mb-3">
                        <div className="flex flex-col gap-6 text-black dark:text-white">
                            <div className="flex gap-4 items-center font-medium">
                                <AiOutlineGift className="text-slate-700 dark:text-teal-400"/> 
                                Birthday
                            </div>
                            <div className="flex gap-4 items-center font-medium">
                                <FiBookOpen className="text-slate-700 dark:text-teal-400"/> 
                                Study
                            </div>
                            <div className="flex gap-4 items-center font-medium">
                                <BsGlobe2 className="text-slate-700 dark:text-teal-400"/> 
                                Website
                            </div>
                            <div className="flex gap-4 items-center font-medium">
                                <TbPacman className="text-slate-700 dark:text-teal-400"/> 
                                Interest
                            </div>
                            <div className="flex gap-4 items-center font-medium">
                                <IoLocateOutline className="text-slate-700 dark:text-teal-400"/> 
                                Location
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 text-slate-700 dark:text-slate-200">
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                        </div>
                        <div className="flex flex-col gap-6 text-slate-500 dark:text-white">
                            <p>07-12-1997</p>
                            <p>ISEP *</p>
                            <p>www.isep.pt</p>
                            <p>Reading & Games</p>
                            <p>Leiria, Portugal</p>
                        </div>
                    </div>
                    <span className="text-slate-500 dark:text-teal-400 text-sm">* ISEP - Instituto Superior de Engenharia do Porto</span>
                    <div className="max-w-3xl mt-8 gap-2 flex flex-col items-center">
                        <h2 className="font-semibold text-gray-700 dark:text-white 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm">{subTitleAboutMe}</h2>
                        <p className="text-slate-500 dark:text-white items-center flex text-justify max-w-[70%] 2xl:text-lg xl:text-base lg:text-sm md:text-sm">
                        Hi! My name is Marlene Condesso and i am a Web Developer. My first time coding was in 2020, when I took my Course based on 'Agile Software Development'.<br></br> 
                        After that, my passion on coding, my focus on creating new things, facing new challenges and my will to keep learning increased.<br></br>
                        I can title myself as a baby on tech area, after all i only had one experience as a web developer. 
                        My main objective is to increase more and more professionally and personally, 
                        let me do it with you.
                        </p>
                        <a href="#contact" className="
                            bg-[#DDD0C8] 
                            dark:bg-slate-600
                            text-white 
                            dark:text-teal-500
                            hover:bg-slate-400 
                            dark:hover:bg-teal-500
                            dark:hover:text-slate-100
                            font-semibold
                            w-20 
                            h-10 
                            rounded 
                            flex
                            justify-center
                            items-center"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;
