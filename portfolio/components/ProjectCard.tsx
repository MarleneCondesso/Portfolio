import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { RxExternalLink } from 'react-icons/rx';

interface ProjectCardProps{
    title: string;
    text?: string;
    tools: string[];
    gitHubUrl?: string;
    webSiteUrl?: string;
}


const ProjectCard: FC<ProjectCardProps> = ({
    title,
    text,
    tools,
    gitHubUrl,
    webSiteUrl
}) => {

    return(
        <div className={`h-72 w-72 2xl:w-80 2xl:h-80 dark:bg-slate-500 dark:bg-opacity-25 bg-white bg-opacity-25 shadow-2xl p-6 rounded-xl animate-fade-in-up-container delay-500`}>
            <div className="gap-8 flex flex-col h-full justify-between">
                <h2 className="dark:text-teal-400 text-white font-semibold text-base 2xl:text-lg">{title}</h2>
                <p className="dark:text-white text-slate-700 text-md">
                    {text}

                </p>
                <div className="flex flex-row gap-4 text-[13px] dark:text-slate-400 text-[var(--icon-color-light)] font-bold">
                    {tools.map((t:string, i:number) => (
                     <div key={t} className='flex flex-row gap-4'>
                        <p key={t}>{t}</p>
                        <p>{i+1 !== tools.length ? '|' : ''}</p>
                    </div>
                    ))}
                </div>
                
                <div className='flex items-end justify-end gap-8 dark:text-teal-200 text-slate-700'>
                    <FaGithub size={25} className='cursor-pointer hover:text-white' onClick={()=> window.open(gitHubUrl)}/>
                    <RxExternalLink size={25} className='cursor-pointer hover:text-white' onClick={() => window.open(webSiteUrl)}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;