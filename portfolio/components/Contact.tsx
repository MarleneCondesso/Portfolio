
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { SiCodepen, SiMicrosoftoutlook } from 'react-icons/si';
import { FC } from 'react';


interface ContactProps {
    getTheme: string;
}
const Contact: FC<ContactProps> = ({
    getTheme
}) => {


    return (
        <section id="contact" className="lg:pt-44
            flex 
            flex-col 
            items-center 
            justify-center"
        >
            <div className='flex flex-col items-center h-full justify-center'>
                <h1 className="
                font-extrabold 
                text-3xl 
                max-sm:text-2xl 
                max-md:text-3xl 
                xl:text-5xl
                lg:text-4xl
                text-[var(--icon-color-light)] 
                dark:text-teal-400"
                >
                    SAY HI!
                </h1>
                <div className="py-16 text-white xl:text-lg lg:text-base text-xs lg:w-[50%] md:w-[70%] text-justify">
                    <p>
                        I'm currently looking for any opportunities and challenges to merge into this area and improve my skills. My inbox is always open. I’ll try my best to get back to you!
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
                    xl:w-44
                    xl:h-14 
                    rounded-xl 
                    text-white 
                    bg-[var(--primary-color-light)]   
                    hover:bg-[var(--selection-color-light)] 
                    hover:bg-opacity-25
                    dark:hover:bg-teal-400
                    dark:text-slate-500
                    dark:bg-white
                    dark:hover:text-slate-100
                    font-semibold
                    gap-3"
                    >
                        <SiMicrosoftoutlook className='text-sky-600' size={25} />

                    </a>
                    <button onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=marleneflima.official@gmail.com,_blank', '_blank')}
                        className="
                    flex
                    flex-row
                    items-center
                    justify-center
                    bg-[var(--primary-color-light)]  
                    h-10 
                    w-20
                    xl:w-44
                    xl:h-14
                    rounded-xl 
                    text-white 
                    hover:bg-[var(--selection-color-light)] 
                    hover:bg-opacity-25
                    dark:hover:bg-teal-400
                    dark:bg-white
                    font-semibold
                    gap-3"
                    >
                        <FcGoogle size={20} />
                    </button>
                </div>
                <div className="p-20 flex flex-row gap-5 text-slate-700 dark:text-teal-400">
                    <div onClick={() => window.open('https://codepen.io/MarleneCondesso', '_blank')}
                        className="
                    w-10
                    h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-50
                    transition"
                    >
                        <SiCodepen size={35} />
                    </div>
                    <div onClick={() => window.open('https://github.com/MarleneCondesso', '_blank')}
                        className="
                    w-10
                    h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-50
                    transition"
                    >
                        <FaGithub size={35} />
                    </div>
                    <div onClick={() => window.open('https://www.linkedin.com/in/marlene-lima-418b0b22b/', '_blank')}
                        className="
                    h-10
                    w-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-50
                    transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;