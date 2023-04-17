import { FC } from 'react';
import Typewriter from 'typewriter-effect';

interface BillboardProps{
    setValueOfDisplay: boolean;
}

const Billboard: FC<BillboardProps> = ({ setValueOfDisplay }) => {

    const label = "I'm Marlene Condesso";
    return(
        <div className={`${setValueOfDisplay ? 'max-sm:absolute sm:absolute' : 'relative'}
        bg-center 
        p-10 
        bg-fixed 
        top-10 
        `}>
            <div className="md:px-35 lg:py-40 lg:px-60">
                <div className=" text-white flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl'>{label}</h1>
                        <h2 className="text-xl gap-5 text-gray-400">
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
                        <div className='bg-gray-400 h-1 w-20'></div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                    
                        <div className="flex lg:h-[30%] lg:w-[30%] h-[40%] w-[40%] p-1 lg:p-5 border-white border-8 items-center justify-center">
                            <img src="/images/profile.jpg" alt="profile-hero"/>
                        </div>
                        
                    </div>
                </div>

                </div>
        </div>
    );
}

export default Billboard;