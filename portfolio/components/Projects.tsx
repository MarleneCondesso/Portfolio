import { IoIosArrowDown } from "react-icons/io";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import { useCallback, useState } from "react";

const Projects = () => {

    const [showChallenges, setShowChallenges ] = useState(false);

    const toogleChanllenges = useCallback(() => {

        setShowChallenges((current) => !current);
    },[]); 

    return (
        <div id="projects" className="px-20">
            <Heading title="Projects"/>
            <div className="flex items-center justify-center flex-col gap-20">
                <div className="grid lg:grid-cols-[250px_minmax(250px,_2fr)] grid-cols-1 items-center justify-center gap-20">
                    <ProjectCard 
                        title="Netflix Website - Clone"
                        text="A simple Netflix Website clone built with Next.js, Tailwind Css and MongoDB"
                        tools={["Next.js", "Tailwind CSS", "MongoDB"]} 
                        webSiteUrl="https://netflix-clone-alpha-bice.vercel.app"
                        gitHubUrl="https://github.com/MarleneCondesso/netflix-clone"
                    />
                    <ProjectCard 
                        title="Sudoku Website"
                        text="A simple sudoku game when i can play when boring. "
                        tools={["Typescript", "Tailwind CSS", "React"]} 
                        webSiteUrl="https://sudoku-lena.vercel.app/"
                        gitHubUrl="https://github.com/MarleneCondesso/sudoku.lena"
                    />
                    {/* <ProjectCard 
                        title="Web Music App"
                        text="Bulding a Music App with references of Spotify Music App"
                        tools={["Tailwind CSS", "Redux", "Rapid API"]} 
                        webSiteUrl=""
                        gitHubUrl=""
                    /> */}
                    <ProjectCard 
                        title="Todo List"
                        text="Todo list app built with Next.js, Tailwind Css and MongoDB"
                        tools={["Next.js", "Tailwind CSS", "MongoDB"]} 
                        webSiteUrl="https://todolist-web-brown.vercel.app/"
                        gitHubUrl="https://github.com/MarleneCondesso/todolist-web"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button className="flex flex-col items-center dark:text-teal-400 dark:hover:text-white hover:text-slate-400 text-slate-700 text-xl cursor-pointer font-semibold"  onClick={toogleChanllenges}>
                        Challenges
                        <IoIosArrowDown size={40}className={`${showChallenges && 'rotate-180'}`}/>
                    </button>
                </div>
                {showChallenges &&
                
                <div className="grid lg:grid-cols-[250px_minmax(250px,_2fr)] grid-cols-1 items-center justify-center gap-20">
                    <ProjectCard 
                        title="News Home page  - Frontend Challenges"
                        text=""
                        tools={["JavaScript", "HTML","CSS"]} 
                        webSiteUrl="https://vercel.com/marlenecondesso/news-homepage/HaK1ncyvM1QwSaKqt9fMU3ot7Tte"
                        gitHubUrl="https://github.com/MarleneCondesso/news-homepage/tree/main/news-homepage-main"
                    /> 
                    <ProjectCard 
                        title="QR Code Compoenent - Frontend Challenges"
                        text=""
                        tools={["JavaScript", "HTML","CSS"]} 
                        webSiteUrl="https://marlenecondesso.github.io/Frontend-CHALLENGE-HUB-QR-code-component/"
                        gitHubUrl="https://github.com/MarleneCondesso/Frontend-CHALLENGE-HUB-QR-code-component/tree/main/qr-code-component-main"
                    /> 
                    <ProjectCard 
                        title="Result Summary Component - Frontend Challenges"
                        text=""
                        tools={["JavaScript", "HTML","CSS"]} 
                        webSiteUrl="https://result-summary-component-dkk5.vercel.app/"
                        gitHubUrl="https://github.com/MarleneCondesso/result-summary-component/tree/main/results-summary-component-main"
                    /> 
                </div>
                }
            </div>
            
        </div>
    );
}

export default Projects;