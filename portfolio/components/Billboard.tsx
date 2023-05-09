import Typewriter from 'typewriter-effect';
import { useActiveMenu } from "react-active-menu";
const Billboard = () => {

    const { registerSection } = useActiveMenu({ offset: 60, smooth: true });

    const label = "I'm Marlene Condesso";
    return (
        <section className='flex flex-col justify-center h-96 items-start mb-60 xl:h-screen' ref={registerSection('home')} id='home'>
            <div className="flex flex-row justify-between items-center">
                <div className='flex flex-col gap-2'>
                    <h1 className='2xl:text-6xl xl:text-5xl text-3xl text-white font-semibold'>{label}</h1>
                    <h2 className="text-xl xl:text-4xl 2xl:text-4xl gap-5 text-slate-700 font-semibold dark:text-teal-200">
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
                    <div className='bg-slate-700 dark:bg-teal-200 h-1 w-20'></div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Billboard;

