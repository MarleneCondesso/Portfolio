import Typewriter from 'typewriter-effect';



const Billboard = () => {



    const label = "I'm Marlene Condesso";
    return (
        <div className={`w-full items-center
        bg-center 
        p-20 
        top-10 
        `}>
            <div className="py-40">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-4xl text-slate-700 dark:text-white font-semibold'>{label}</h1>
                            <h2 className="text-xl gap-5 text-slate-500 font-semibold dark:text-teal-200">
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
                            <div className='bg-slate-500 dark:bg-teal-200 h-1 w-20'></div>
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Billboard;