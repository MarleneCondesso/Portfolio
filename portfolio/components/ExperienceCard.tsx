import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { MdArrowForwardIos } from 'react-icons/md'
import { FaArrowCircleRight } from "react-icons/fa";
interface ExperienceCardProps {
    showInfo: string
}


const ExperienceCard: FC<ExperienceCardProps> = ({
    showInfo
}) => {
    const { t } = useTranslation(['translationExperience']);
    const tasks = t(`experience-${showInfo}-tasks`);
    return (
        <div className="xl:h-[500px] w-full p-6 flex flex-col items-center justify-center">
            <div
                className={`flex h-full justify-between flex-col gap-8 p-4  text-white  dark:text-teal-400 self-start text-sm 
                      `}
            >
                <div className="grid grid-cols-1 gap-4  ">
                    <h2 className="font-semibold text-slate-700 dark:text-white">
                        {t(`experience-${showInfo}-title`)}
                    </h2>
                    <div className="flex xl:flex-row flex-col lg:flex-col md:flex-row gap-2 font-bold ">
                        <div className="flex flex-row gap-2">
                            <p>{t(`experience-${showInfo}-position`)}</p>
                            <p className="lg:flex hidden">|</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <p>{t(`experience-${showInfo}-start`)}</p>
                            <p>-</p>
                            <p>{t(`experience-${showInfo}-end`)}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8  dark:text-white text-slate-700">
                    <p className="flex flex-row justify-start gap-2">
                        {t(`experience-${showInfo}-description`)}
                    </p>
                    <div className="flex flex-col gap-2 bg-white bg-opacity-25 p-5 rounded-xl">
                        <h2 className="font-bold text-slate-600 dark:text-slate-800">{t(`experience-${showInfo}-subtitle-tasks`)}</h2>
                        {t<'experience-n4it-tasks', { returnObjects: true }, string[]>('experience-n4it-tasks', { returnObjects: true }).map((e, i) => (
                            <div className="flex flex-row items-center gap-2 justify-start" key={i}>
                                <div className='h-4 w-4'>
                                    <FaArrowCircleRight className='text-slate-700' height={'16px'} width={'16px'} />
                                </div>

                                {t(`experience-${showInfo}-tasks.${i}`)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard