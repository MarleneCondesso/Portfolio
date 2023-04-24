import { FC, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { SocialIcon } from 'react-social-icons';

interface NavbarSocialProps{
    getTheme:string;
}

const NavbarSocial: FC<NavbarSocialProps> = ({ getTheme }
) => {
    const [ theme, setTheme ] = useState(typeof window !== 'undefined' && localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');
    return(
        <div className="fixed">
            <div className="fixed top-[13rem] left-[-5rem] text-black dark:text-teal-400 -rotate-90">
                <a href="mailto:marleneflima.official@gmail.com?">marleneflima.official@gmail.com</a>
            </div>   
            <div className="fixed left-4 bottom-8">
                <div className="flex flex-col text-black gap-8 bg-slate-500 bg-opacity-25 p-1 rounded-lg">
                    <div onClick={() => window.open('https://github.com/MarleneCondesso','_blank')}
                    className="
                        w-10
                        h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        hover:opacity-50
                        transition
                        dark:text-teal-400
                        text-black"
                    >
                        <FaGithub size={30}/>
                    </div>
                    <div onClick={() => window.open('https://www.linkedin.com/in/marlene-lima-418b0b22b/','_blank')}
                    className="
                        h-10
                        w-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        hover:opacity-50
                        transition
                        dark:text-teal-400
                        text-black"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarSocial;