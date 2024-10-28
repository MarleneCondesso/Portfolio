import { FC, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface NavbarSocialProps {
    getTheme: string;
    showNavbarSocial: boolean;
}

const NavbarSocial: FC<NavbarSocialProps> = ({ getTheme, showNavbarSocial }
) => {

    //const [showNavbarSocial, setShowNavbarSocial] = useState(true);

   /*  useEffect(() => {


        const handleScreenSize = () => {

            let lastScreenYSize = window.innerHeight;
            let lastScreenXSize = window.innerWidth;
            if (lastScreenYSize <= 900 || lastScreenXSize <= 1550) {
                setShowNavbarSocial(false);
            } else {
                setShowNavbarSocial(true);
            }
        }

        window.addEventListener('resize', handleScreenSize);

        return () => {
            window.removeEventListener('resize', handleScreenSize);
        }

    }, []); */

    return (
        <div className={`bottom-10 top-24 w-20 left-0 lg:fixed lg:block hidden  }`}>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="  z-40 h-full flex items-center">
                    <div className="-rotate-90 flex z-40  ">
                        <a href="mailto:marleneflima.official@gmail.com?" className="text-sm text-slate-700 dark:text-teal-400 hover:opacity-50">marleneflima.official@gmail.com</a>
                    </div>
                </div>
                <div className="flex flex-col h-full items-center">
                    <div className="bg-slate-700 dark:bg-teal-400 h-full w-[0.1rem] mt-4 mb-4 z-0 "></div>
                    <div className="flex flex-col text-[#DDD0C8] gap-4 bg-slate-700 p-2 rounded-lg z-40 dark:bg-slate-600">
                        <div onClick={() => window.open('https://github.com/MarleneCondesso', '_blank')}
                            className="
                            w-3
                            h-3
                            rounded-full
                            flex
                            items-center
                            justify-center
                            cursor-pointer
                            hover:opacity-50
                            transition
                            dark:text-teal-400
                            text-white"
                        >
                            <FaGithub size={30} />
                        </div>
                        <div onClick={() => window.open('https://www.linkedin.com/in/marlene-lima-418b0b22b/', '_blank')}
                            className="
                            h-3
                            w-3
                            rounded-full
                            flex
                            items-center
                            justify-center
                            cursor-pointer
                            hover:opacity-50
                            transition
                            dark:text-teal-400
                            text-white"
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

        </div>
    );
}

export default NavbarSocial;