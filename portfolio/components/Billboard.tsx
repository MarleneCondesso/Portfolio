import Typewriter from 'typewriter-effect';
import { useActiveMenu } from "react-active-menu";
const Billboard = () => {

    const { registerSection } = useActiveMenu({ offset: 60, smooth: true });

    const label = "I'm Marlene Condesso";
    return (
        <section className='flex flex-col justify-center h-96 items-start mb-60 xl:h-screen' ref={registerSection('home')} id='home'>
            <div className="flex flex-row justify-between items-center">
                <div className='flex flex-col gap-2'>
                    <h1 className='2xl:text-4xl xl:text-2xl text-xl text-slate-700 dark:text-white font-semibold'>{label}</h1>
                    <h2 className="text-lg xl:text-xl 2xl:text-2xl gap-5 text-[var(--icon-color-light)] font-semibold dark:text-teal-200">
                        <Typewriter
                            options={{
                                strings: [
                                    "Software Developer",
                                    "Web Developer"

                                ],
                                delay: 50,
                                deleteSpeed: 50,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <div className='bg-[var(--icon-color-light)] dark:bg-teal-200 h-1 w-20'></div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Billboard;

