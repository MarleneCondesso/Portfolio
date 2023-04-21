import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";


interface NavbarSocialProps{
    getTheme:string;
}

const NavbarSocial: FC<NavbarSocialProps> = ({ getTheme }
) => {

    return(
        <div className="fixed">
            <div className="fixed top-[13rem] left-[-5rem] text-black dark:text-teal-400 -rotate-90">
                <a>marleneflima.official@gmail.com</a>
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
                        <img className="h-7 text-teal-400" src={`${getTheme === 'dark' ? 'images/linkedinDark.png' : 'images/linkedin.png'}`} alt='linkdin-logo'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarSocial;