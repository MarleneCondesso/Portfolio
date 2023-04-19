import { FC } from 'react';
import Typewriter from 'typewriter-effect';

interface BillboardProps {
    setValueOfDisplay: boolean;
}

const Billboard: FC<BillboardProps> = ({ setValueOfDisplay }) => {

    const label = "I'm Marlene Condesso";
    return (
        <div className={`h-full w-full flex items-center
        bg-center 
        p-10 
        bg-fixed 
        top-10 
        `}>
            <div className="py-40">
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
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Billboard;