import { IoIosArrowDown } from "react-icons/io";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

const Projects = () => {
    
    const { t } = useTranslation(['translationProjects']);
    const [showChallenges, setShowChallenges ] = useState(false);

    const toogleChanllenges = useCallback(() => {

        setShowChallenges((current) => !current);
    },[]); 

    return (
        <section id="projects" className={`flex flex-col mb-72 lg:gap-20`}>
            <Heading title={t('projects-title')}/>
            <div className="flex items-center justify-center flex-col w-full self-center gap-32">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 self-center items-center justify-center gap-20">
                    <ProjectCard 
                        title={t('projects-netflix-title')}
                        text={t('projects-netflix-text')}
                        tools={["Next.js", "Tailwind CSS", "MongoDB"]} 
                        webSiteUrl="https://netflix-clone-alpha-bice.vercel.app"
                        gitHubUrl="https://github.com/MarleneCondesso/netflix-clone"
                    />
                    <ProjectCard 
                        title={t('projects-sudoku-title')}
                        text={t('projects-sudoku-text')}
                        tools={["Typescript", "Tailwind CSS", "React"]} 
                        webSiteUrl="https://sudoku-lena.vercel.app/"
                        gitHubUrl="https://github.com/MarleneCondesso/sudoku.lena"
                    />
                    {/* <ProjectCard 
                        title="E-commerce"
                        text=". "
                        tools={["Typescript", "Tailwind CSS", "React"]} 
                        webSiteUrl=""
                        gitHubUrl=""
                    /> */}
                    {/* <ProjectCard 
                        title="Web Music App"
                        text="Bulding a Music App with references of Spotify Music App"
                        tools={["Tailwind CSS", "Redux", "Rapid API"]} 
                        webSiteUrl=""
                        gitHubUrl=""
                    /> */}
                    <ProjectCard 
                        title={t('projects-todo-title')}
                        text={t('projects-todo-text')}
                        tools={["Next.js", "Tailwind CSS", "MongoDB"]} 
                        webSiteUrl="https://todolist-web-brown.vercel.app/"
                        gitHubUrl="https://github.com/MarleneCondesso/todolist-web"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button className={`flex flex-col items-center dark:text-teal-400 dark:hover:text-white hover:text-slate-700 text-lg cursor-pointer font-semibold ${showChallenges && 'dark:text-white text-slate-700'}`}  onClick={toogleChanllenges}>
                        Challenges  from  "codementor.io"
                        <IoIosArrowDown size={40}className={`${showChallenges && 'rotate-180'}`}/>
                    </button>
                </div>
                {showChallenges &&
                
                <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-center justify-center gap-20">
                    <ProjectCard 
                        title="News Home page  - Frontend Challenges"
                        text=""
                        tools={["JavaScript", "HTML","CSS"]} 
                        webSiteUrl="https://news-homepage-two-chi.vercel.app/"
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
            
        </section>
    );
}

export default Projects;