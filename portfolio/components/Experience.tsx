import { useCallback, useEffect, useState } from "react";
import Heading from "./Heading";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
import ExperienceCard from "./ExperienceCard";
import ExperienceButton from "./ExperienceButton";
const Experience = () => {
    const [showInfo, setShowInfo] = useState("n4it");
    const { t } = useTranslation(['translationExperience']);
    const [openOtherJobs, setOpenOtherJobs] = useState(false);
    const [openProgramming, setOpenProgramming] = useState(false);
    const [selectExperience, setSelectExperience] = useState(false);

    const handleOpenOtherJobs = useCallback(() => {
        setOpenOtherJobs((current) => !current);
    }, []);

    useEffect(() => {
        if (openOtherJobs) {
            setOpenProgramming(false);
        }
    }, [openOtherJobs, setOpenProgramming]);

    useEffect(() => {
        if (openProgramming) {
            setOpenOtherJobs(false);
        }
    }, [setOpenOtherJobs, openProgramming]);

    const handleOpenProgrammingJobs = useCallback(() => {
        setOpenProgramming((current) => !current);
    }, []);


    return (
        <section id="experience" className={`flex flex-col`}>
            <Heading title={t('experience-title')} />
            <div
                className="
                    2xl:w-[100%]
                    xl:w-[90%]
                    w-full
                    grid 
                    grid-cols-1 
                    2xl:gap-8 
                    md:gap-6
                    justify-center 
                    items-center 
                    self-center
                    lg:grid-cols-[300px_minmax(200px,_2fr)]
                    bg-white
                    bg-opacity-25
                    dark:bg-slate-500
                    dark:bg-opacity-25
                    2xl:rounded-tr-[50rem]
                    2xl:rounded-br-[40rem]
                    2xl:rounded-bl-[70rem]
                    2xl:rounded-tl-[30rem]
                    xl:rounded-tr-[90rem]
                    xl:rounded-br-[80rem]
                    xl:rounded-bl-[80rem]
                    xl:rounded-tl-[30rem]
                    lg:rounded-tr-[20rem]
                    lg:rounded-tl-[7rem]
                    lg:rounded-br-[10rem]
                    lg:rounded-bl-[10rem]
                    md:rounded-tr-[10rem]
                    md:rounded-tl-[5rem]
                    md:rounded-br-[5rem]
                    md:rounded-bl-[10rem]
                    rounded-tr-[3rem]
                    rounded-tl-[6rem]
                    rounded-br-[8rem]
                    rounded-bl-[4rem]
                    h-auto
                    p-4
                    2xl:p-10
                    animate-fade-in-up 
                    delay-1000
                    "
            >
                <div
                    className="
                        flex 
                        flex-col 
                        pt-5 
                        pl-5
                        gap-4 
                        justify-start
                        self-start
                        "
                >
                    <div className="flex flex-col gap-4">
                        <button
                            id={"btn_programming_job"}
                            onClick={handleOpenProgrammingJobs}
                            className={`
                            ${openProgramming
                                    ? "text-white dark:text-teal-200 bg-[var(--secondary-color-light)] bg-opacity-0 dark:bg-slate-700"
                                    : "text-[var(--icon-color-light)] dark:hover:text-teal-200 dark:text-white bg-white dark:bg-slate-500 dark:bg-opacity-25 bg-opacity-40"
                                }
                                text-base
                                h-4 
                                xl:w-80
                                w-64
                                flex 
                                flex-row
                                gap-4
                                rounded-md
                                font-semibold
                                p-6
                                items-center`}
                        >
                            {t('experience-programming-job')}
                            <div className={`${openProgramming ? "rotate-0" : "rotate-180"}`}>
                                <MdKeyboardArrowUp />
                            </div>
                        </button>
                    </div>
                    {openProgramming && (
                        <div className="flex flex-row lg:flex-col items-center lg:justify-center gap-4 bg-[var(--secondary-color-light)] dark:bg-white dark:bg-opacity-25 bg-opacity-25 rounded-3xl animate-fade-in-up text-sm overflow-x-auto overflow-scroll p-4 px-8 w-full max-w-fit">
                            <ExperienceButton information={'n4it'} showInfo={showInfo}setInformation={(e) => setShowInfo(e)} text="N4IT Software"/>
                        </div>
                    )}
                    <button
                        onClick={handleOpenOtherJobs}
                        className={`
                            ${openOtherJobs
                                ? "text-white dark:text-teal-200 bg-[var(--secondary-color-light)] bg-opacity-0 dark:bg-slate-700"
                                : "text-[var(--icon-color-light)] dark:hover:text-teal-200 dark:text-white bg-white bg-opacity-40 dark:bg-opacity-25"
                            }
                                text-base 
                                h-12 
                                xl:w-80
                                w-64
                                flex 
                                flex-row
                                gap-4
                                rounded-md
                                font-semibold
                                p-6
                                items-center`}
                    >
                        {t('experience-other-areas')}
                        <div className={`${openOtherJobs ? "rotate-0" : "rotate-180"}`}>
                            <MdKeyboardArrowUp />
                        </div>
                    </button>
                    {openOtherJobs && (
                        <div className="flex flex-row lg:flex-col items-center lg:justify-center gap-6 bg-[var(--secondary-color-light)] dark:bg-white dark:bg-opacity-25 bg-opacity-25 rounded-3xl animate-fade-in-up text-sm overflow-x-auto overflow-scroll p-5 w-full">
                            <ExperienceButton setInformation={(e) => setShowInfo(e)} information={'ruga'} text="RUGA" showInfo={showInfo}/>
                            <ExperienceButton setInformation={(e) => setShowInfo(e)} information={'dolores'} text="Dolores Hipólito, Unipessoal, LDA" showInfo={showInfo}/>
                            <ExperienceButton setInformation={(e) => setShowInfo(e)} information={'fm'} text="FM TEXTILES, SA" showInfo={showInfo}/>
                            <ExperienceButton setInformation={(e) => setShowInfo(e)} information={'esposende'} text="Esposende 2000" showInfo={showInfo}/>
                            <ExperienceButton setInformation={(e) => setShowInfo(e)} information={'bombeiros'} text="Bombeiros Voluntários de Fão" showInfo={showInfo}/>
                        </div>
                    )}
                </div>
                <div
                    className="
                        xl:h-[500px] w-full 
                        p-6 
                        flex
                        flex-col
                        items-center
                        justify-center"
                >
                    <ExperienceCard showInfo={showInfo}/>
                </div>
            </div>
        </section>
    );
};

export default Experience;
