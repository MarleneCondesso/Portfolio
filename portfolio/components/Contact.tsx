
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { SiCodepen, SiMicrosoftoutlook  } from 'react-icons/si';
import { FC } from 'react';


interface ContactProps{
    getTheme: string;
}
const Contact: FC<ContactProps> = ({
    getTheme
}) => {

    
    return(
        <div id="contact" className="
            mt-20
            p-14 
            flex 
            flex-col 
            h-screen 
            items-center 
            justify-center" 
        >
            <h1 className="
                font-extrabold 
                text-5xl 
                max-sm:text-3xl 
                max-md:text-4xl 
                text-slate-600 
                dark:text-teal-400"
            >
                SAY HI!
            </h1>
            <div className="py-16 dark:text-white text-slate-700 w-[70%] lg:w-[50%] text-justify">
                <p>
                    I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
            </div>
            <div className='flex lg:flex-row gap-10 flex-col'>
                <a href="mailto:marleneflima.official@gmail.com?"
                    className="
                    flex
                    flex-row
                    items-center
                    justify-center
                    h-10 
                    w-20 
                    rounded-xl 
                    text-white 
                    bg-slate-600 
                    hover:text-slate-500 
                    hover:bg-opacity-20
                    dark:hover:bg-teal-400
                    dark:text-slate-500
                    dark:bg-white
                    dark:hover:text-slate-100
                    font-semibold
                    gap-3"
                >
                <SiMicrosoftoutlook className='text-sky-600' size={25}/> 
                       
                </a>
                <button onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=marleneflima.official@gmail.com,_blank','_blank')}
                    className="
                    flex
                    flex-row
                    items-center
                    justify-center
                    bg-gray-600 
                    h-10 
                    w-20
                    rounded-xl 
                    text-white 
                    hover:text-slate-500 
                    hover:bg-opacity-20
                    dark:hover:bg-teal-400
                    dark:text-slate-500
                    dark:bg-white
                    dark:hover:text-slate-100
                    font-semibold
                    gap-3"
                >
                <FcGoogle size={25}/>
                </button>
            </div>
            <div className="p-20 flex flex-row gap-5">
                <div onClick={() => window.open('https://codepen.io/MarleneCondesso','_blank')}
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
                    <SiCodepen size={40}/>
                </div>
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
                    <FaGithub size={40}/>
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
                    <img className="h-10 text-teal-400" src={`${getTheme === 'dark' ? 'images/linkedinDark.png' : 'images/linkedin.png'}`} alt='linkdin-logo'/>
                </div>
            </div>
        </div>
    );
}

export default Contact;