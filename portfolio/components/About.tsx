import { AiOutlineGift } from "react-icons/ai";
import Heading from "./Heading";
import { FiBookOpen } from "react-icons/fi";
import { TbPacman } from "react-icons/Tb";
import { BsGlobe2 } from "react-icons/Bs";
import { IoLocateOutline } from "react-icons/Io5";
const About = () => {

    const subTitleAboutMe: string = "I'm Marlene and Frontend Developer";
    const textAboutMe: string = "Hi! My name is Marlene Lima. I am a web developer and a software developer, and i'm very passionate and dedicate my work."
    
    return(
        <section className="py-10 px-16 bg-white mt-10" id="about">
            <Heading title="About me" />
            <div className="grid grid-cols-1 { /**md:grid-cols-2*/ } gap-14">
                <div>
                    <img></img>
                </div>
                <div>
                    <div className="flex items-center justify-between w-72">
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4 items-center font-medium">
                                <AiOutlineGift className="text-black"/> 
                                Birthday
                            </div>
                            <div className="flex gap-4 items-center font-medium">
                                <FiBookOpen className="text-black"/> 
                                Study
                            </div>
                            <div className="flex gap-4 items-center font-medium">
                                <BsGlobe2 className="text-black"/> 
                                Website
                            </div>
                            <div className="flex gap-4 items-center font-medium">
                                <TbPacman className="text-black"/> 
                                Interest
                            </div>
                            <div className="flex gap-4 items-center font-medium">
                                <IoLocateOutline className="text-black"/> 
                                Location
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 text-gray-400">
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                        </div>
                        <div className="flex flex-col gap-6 text-gray-400">
                            <p>07-12-1997</p>
                            <p>ISEP *</p>
                            <p>www.isep.pt</p>
                            <p>Reading & Games</p>
                            <p>Leiria, Portugal</p>
                        </div>
                    </div>
                    <span className="text-gray-400 text-sm">* ISEP - Instituto Superior de Engenharia do Porto</span>
                    <div className="max-w-3xl mt-8 gap-6 flex flex-col">
                        <h2 className="font-semibold text-gray-600">{subTitleAboutMe}</h2>
                        <p className="text-gray-400">
                            {textAboutMe}
                        </p>
                        <button onClick={()=> {}}className="
                            bg-[#DDD0C8] 
                            w-20 
                            h-10 
                            rounded 
                            text-white 
                            hover:bg-slate-50 
                            hover:text-gray-600"
                        >
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About;
