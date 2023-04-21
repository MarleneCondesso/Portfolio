import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { RxExternalLink } from 'react-icons/rx';

interface ProjectCardProps{
    title: string;
    text: string;
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
        <div className="h-72 w-72 dark:bg-slate-500 bg-slate-700 bg-opacity-25 shadow-xl p-6" onClick={()=>{}}>
            <div className="gap-8 flex flex-col">
                <h2 className="dark:text-teal-400 text-slate-500 font-semibold text-xl">{title}</h2>
                <p className="dark:text-white text-slate-700">
                    {text}
                </p>
                <div className="flex flex-row gap-4 text-[11px] dark:text-slate-400 text-slate-700">
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