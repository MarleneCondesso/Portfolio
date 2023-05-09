import { useCallback, useEffect, useState } from "react";
import Heading from "./Heading";
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
const Experience = () => {

    const [showInfo, setShowInfo] = useState('n4');

    const [openOtherJobs, setOpenOtherJobs] = useState(false);
    const [openProgramming, setOpenProgramming] = useState(false);
    const [selectExperience, setSelectExperience ] = useState(false);

    const handleOpenOtherJobs = useCallback(() => {
        setOpenOtherJobs((current) => !current);
    }, []);

    useEffect(() => {
        if (openOtherJobs) {
            setOpenProgramming(false);
        } 
    }, [openOtherJobs, setOpenProgramming])

    useEffect(() => {
        if (openProgramming) {
            setOpenOtherJobs(false);
        } 
    }, [setOpenOtherJobs, openProgramming])
    const handleOpenProgrammingJobs = useCallback(() => {
        setOpenProgramming((current) => !current);
    }, []);


    return (
        <section className="xl:h-screen md:gap-32 flex flex-col " id="about">
            <Heading title="Experience" />
                <div className="
                    2xl:w-[100%]
                    xl:w-[90%]
                    w-full
                    grid 
                    grid-cols-1 
                    2xl:gap-8 
                    justify-center 
                    items-center 
                    self-center
                    2xl:grid-cols-[450px_minmax(200px,_2fr)]
                    xl:grid-cols-[400px_minmax(200px,_2fr)]
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
                    2xl:p-10"
                > 
                        
                    <div className="
                        flex 
                        max-sm:flex-col 
                        flex-col 
                        lg:pl-0 
                        lg:flex-col 
                        gap-4 
                        justify-start
                        "
                    >
                        <div className="flex max-sm:flex-col flex-col lg:pl-0 lg:flex-col gap-4">
                            <button onClick={handleOpenProgrammingJobs} className="
                                
                                hover:text-black
                                dark:hover:text-teal-200
                                2xl:text-2xl
                                text-white
                                xl:text-xl
                                lg:text-lg
                                h-12 
                                xl:w-80
                                w-64
                                flex 
                                flex-row
                                gap-4
                                rounded-md
                                font-semibold
                                p-8
                                items-center"
                            >
                                Programming jobs
                                <div className={`${openProgramming ? 'rotate-0' : 'rotate-180'}`}>
                                    <MdKeyboardArrowUp />
                                </div>
                            </button>
                        </div>
                        {openProgramming ? (

                            <div className="
                                w-full 
                                lg:overflow-hidden 
                                overflow-x-auto 
                                border-white"
                            >
                                <ul className="flex flex-col lg:items-center lg:justify-center text-gray-700 dark:text-slate-900">
                                    <li onClick={() => {setShowInfo('n4');setSelectExperience(true);}} className="mb-2">
                                        <button className="
                                        text-slate-800
                                        dark:text-teal-200
                                        hover:text-white
                                        hover:underline
                                        underline-offset-[12px]
                                        focus:underline
                                        focus:text-slate-900
                                        2xl:text-xl
                                        xl:text-lg
                                        lg:text-base
                                        font-semibold
                                        h-12
                                        w-48
                                        rounded-md
                                        flex 
                                        flex-row
                                        items-center
                                        justify-center">
                                            N4IT Software
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : null}
                        <button onClick={handleOpenOtherJobs} className="
                            hover:text-slate-800
                            dark:hover:text-teal-200
                            text-white
                            2xl:text-2xl
                            xl:text-xl
                            lg:text-lg
                            pb-8
                            pl-8
                            h-12 
                            w-64
                            xl:w-80
                            flex 
                            flex-row
                            gap-4
                            font-semibold
                            items-center"
                        >
                            Other jobs
                            <div className={`${openOtherJobs ? 'rotate-0' : 'rotate-180'}`}>
                                <MdKeyboardArrowUp />
                            </div>
                        </button>
                        {openOtherJobs ? (
                            <div className="
                                lg:overflow-hidden 
                                w-full
                                overflow-x-auto
                                scroll-smooth
                                dark:scrollbar-track-teal-500 
                                dark:scrollbar-thumb-slate-600 
                                scrollbar-thumb-rounded-lg 
                                scrollbar-thin
                                scrollbar-track-[#DDD0C8] 
                                scrollbar-thumb-gray-500
                                2xl:text-xl
                                xl:text-lg
                                lg:text-base
                                text-md
                                py-6
                                font-semibold"
                            >
                                <ul className="flex flex-row lg:flex-col lg:items-center lg:justify-center gap-6 pr-4">
                                    <li onClick={() => { setShowInfo('dh'); setSelectExperience(true);}}>
                                        <button className="
                                            hover:underline
                                            underline-offset-[12px]
                                            focus:underline
                                            text-slate-500
                                            dark:text-teal-200
                                            hover:text-slate-700
                                            focus:text-slate-700
                                            dark:hover:text-white
                                            dark:focus:text-white
                                            w-80"
                                        >
                                            Dolores Hipólito, Unipessoal, LDA
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('fm'); setSelectExperience(true);}}>
                                        <button className="
                                            hover:underline
                                            underline-offset-[12px]
                                            focus:underline
                                            text-slate-500
                                            dark:text-teal-200
                                            hover:text-slate-700
                                            focus:text-slate-700
                                            dark:hover:text-white
                                            dark:focus:text-white
                                            w-72"
                                        >
                                            FM Têxteis S.A
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('e2000'); setSelectExperience(true);}}>
                                        <button className="
                                            hover:underline
                                            underline-offset-[12px]
                                            focus:underline
                                            text-slate-500
                                            dark:text-teal-200
                                            hover:text-slate-700
                                            focus:text-slate-700
                                            dark:hover:text-white
                                            dark:focus:text-white
                                            w-64"
                                        >
                                            Esposende2000
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('bvf'); setSelectExperience(true);}}>
                                        <button className="
                                            hover:underline
                                            underline-offset-[12px]
                                            focus:underline
                                            text-slate-500
                                            dark:text-teal-200
                                            hover:text-slate-700
                                            focus:text-slate-700
                                            dark:hover:text-white
                                            dark:focus:text-white
                                            w-64"
                                        >
                                            Bombeiros Voluntário de Fão
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('upn'); setSelectExperience(true);}}>
                                        <button className="
                                            hover:underline
                                            underline-offset-[12px]
                                            focus:underline
                                            text-slate-500
                                            dark:text-teal-200
                                            hover:text-slate-700
                                            focus:text-slate-700
                                            dark:hover:text-white
                                            dark:focus:text-white
                                            w-64">
                                            UPN
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : null}
                    </div>
                    <div className="
                        xl:h-[500px] w-full 
                        p-6 
                        flex
                        flex-col
                        items-center
                        justify-center"
                    >

                        <div className={`
                            h-full 
                            w-full 
                            flex 
                            flex-col 
                            gap-8 
                            items-start 
                            justify-between 
                            dark:text-white 
                            text-slate-700
                            p-4
                            ${showInfo === 'upn' ? 'flex' : 'hidden'}`}
                        >
                            <div className="grid grid-cols-1 gap-4 2xl:text-2xl xl:text-xl lg:text-lg md:text-base">
                                <h2 className="font-semibold xl:text-2xl lg:text-xl md:text-lg h-auto">UPN - União de Produtores Hortículas do Norte, LDA</h2>
                                <div className="flex xl:flex-row flex-col lg:flex-col md:flex-row gap-2 font-semibold text-white dark:text-teal-400">
                                    <div className="flex flex-row gap-1">
                                        <p>Agricultural producer</p>
                                        <p>|</p>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <p>Jul 2013</p>
                                        <p>-</p>
                                        <p>Sep 2015</p>
                                    </div>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-2 items-start justify-center xl:text-xl lg:text-lg md:text-base">
                                <li>
                                    <p className="flex flex-row items-center justify-center gap-2">
                                        <MdArrowForwardIos />
                                        Land treatment for future crops.
                                    </p>
                                </li>
                                <li>
                                    <p className="flex flex-row items-center justify-center gap-2">
                                        <MdArrowForwardIos />
                                        Production of vegetable crops.
                                    </p>
                                </li>
                                <li>
                                <div className="p-4 flex flex-col items-start justify-start">
                                        <p className="flex flex-row items-center gap-2">
                                            <MdArrowForwardIos size={12} />Seeding.</p>
                                        <p className="flex flex-row items-center gap-2">
                                            <MdArrowForwardIos size={12} />Fertilizing.</p>
                                        <p className="flex flex-row items-center gap-2">
                                            <MdArrowForwardIos size={12} />Cleaning.</p>
                                        <p className="flex flex-row items-center gap-2">
                                            <MdArrowForwardIos size={12} />Irrigation.</p>
                                        <p className="flex flex-row items-center gap-2">
                                            <MdArrowForwardIos size={12} />Pruning.</p>
                                        <p className="flex flex-row items-center gap-2">
                                            <MdArrowForwardIos size={12} />Harvests.</p>
                                    </div>

                                </li>
                            </ul>

                        </div>

                        <div className={`flex h-full justify-between flex-col gap-8 p-4 dark:text-white text-slate-700 self-start xl:text-xl lg:text-lg md:text-base
                        ${showInfo === 'bvf' ? 'flex' : 'hidden'}`}>
                                <div className="grid grid-cols-1 gap-4">
                                    <h2 className="font-semibold xl:text-2xl lg:text-xl md:text-lg">Bombeiros Voluntários de Fão</h2>
                                    <div className="flex xl:flex-row flex-col lg:flex-col md:flex-row gap-2 font-semibold text-white dark:text-teal-400 ">
                                        <div className="flex flex-row gap-2">
                                            <p>Forest security assistent</p>
                                            <p className="lg:flex hidden">|</p>
                                        </div>
                                        <div className="flex flex-row gap-2 items-center ">
                                            <p>May 2015</p>
                                            <p>-</p>
                                            <p>Jul 2015</p>
                                        </div>
                                    </div>
                                </div>

                                <ul className="flex flex-col gap-10 items-center justify-center mb-5">
                                    <li>
                                        <p className="flex items-start pb-8">
                                            Professional Intership carried out by the scope of Technical Course of the Environmental Management.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="flex flex-row items-center  justify-start gap-2">
                                            <MdArrowForwardIos />
                                            Identification of fire hydrants and water points.
                                        </p>
                                        <p className="flex flex-row items-center gap-2 justify-start">
                                            <MdArrowForwardIos />
                                            Marking georeferenced information relating to identified fire hydrants and water points.
                                        </p>
                                        <p className="flex flex-row items-center gap-2 justify-start">
                                            <MdArrowForwardIos />
                                            Patrolling forest areas at risk.
                                        </p>
                                    </li>
                                </ul>
                        </div>

                        <div className={`
                            h-full 
                            w-full 
                            items-start 
                            justify-between
                            flex 
                            flex-col 
                            gap-8 
                            p-4 
                            dark:text-white
                            xl:text-xl lg:text-lg md:text-base
                            text-slate-700 
                            ${showInfo === 'e2000' ? 'flex' : 'hidden'}`}
                        >
                            <div className="grid grid-cols-1 gap-4">
                                <h2 className="font-semibold xl:text-2xl lg:text-xl md:text-lg">Esposende 2000</h2>
                                <div className="flex xl:flex-row flex-col lg:flex-col md:flex-row gap-2 font-semibold text-white dark:text-teal-400">
                                    <div className="flex flex-row gap-2">
                                        <p>Assistant in the organization of <br></br>sports and recreational activities</p>
                                        <p className="lg:flex hidden">|</p>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <p>April 2016</p>
                                        <p>-</p>
                                        <p>Jul 2016</p>
                                    </div>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-2 justify-center mb-5">
                                <li>
                                    <p className="flex items-start pb-8">
                                        Professional Intership carried out by the scope of Technical Course of the Environmental Management.
                                    </p>
                                </li>
                                <li className="">
                                    <p className="flex flex-row items-center  justify-start gap-2">
                                        <MdArrowForwardIos />
                                        Planning sports activities:
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        Trails.
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        Walks.
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        BTT Racing.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className={`
                            h-full 
                            w-full 
                            justify-between
                            items-start 
                            flex 
                            flex-col 
                            gap-8 
                            p-4 
                            dark:text-white 
                            xl:text-xl lg:text-lg md:text-base
                            text-slate-700
                            ${showInfo === 'fm' ? 'flex' : 'hidden'}`}
                        >
                            <div className="grid grid-cols-1 gap-4">
                                <h2 className="font-semibold xl:text-2xl lg:text-xl md:text-lg">FM Têxteis S.A.</h2>
                                <div className="flex xl:flex-row flex-col lg:flex-col md:flex-row gap-2 font-semibold text-white dark:text-teal-400">
                                    <div className="flex flex-row gap-2">
                                        <p>Textile machine operator</p>
                                        <p className="lg:flex hidden">|</p>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <p>Jan 2017</p>
                                        <p>-</p>
                                        <p>Jan 2019</p>
                                    </div>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-2 mb-14">
                                <li className="">
                                    <p className="flex flex-row items-center justify-start gap-2 mb-10 font-semibold">
                                        Textile operator in:
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        Cutting sectior (Main charge).
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        Packing sector.
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        Confection sector.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className={`
                            h-full 
                            w-full 
                            xl:justify-between
                            items-start 
                            flex 
                            flex-col 
                            gap-8 
                            p-4 
                            text-slate-700
                            dark:text-white 
                            text-slate
                            xl:text-xl lg:text-lg md:text-base
                            ${showInfo === 'dh' ? 'flex' : 'hidden'}`}
                        >
                            <div className="grid grid-cols-1 gap-8">
                                <h2 className="font-semibold xl:text-2xl lg:text-xl md:text-lg">Dolores Hipólito, Unipessoal, LDA</h2>
                                <div className="flex xl:flex-row lg:flex-col md:flex-row flex-col gap-2 font-semibold text-white dark:text-teal-400">
                                    <div className="flex flex-row gap-2">
                                        <p>Textile machine operator</p>
                                        <p className="lg:flex hidden">|</p>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <p>Out 2019</p>
                                        <p>-</p>
                                        <p>Out 2020</p>
                                    </div>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-2 items-center justify-center">
                                <li className="mb-20">
                                    <p className="flex flex-row items-center justify-start mb-10 font-semibold">
                                        Textile operator in:
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        Packing sector.
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        Confection sector.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className={`
                            h-full 
                            w-full 
                            items-start 
                            justify-between
                            flex 
                            flex-col  
                            p-4 
                            dark:text-white 
                            text-slate-700
                            xl:text-xl lg:text-lg md:text-base
                            ${showInfo === 'n4' ? 'flex' : 'hidden'}`}
                        >
                            <div className="grid grid-cols-1 gap-4">
                                <h2 className="font-semibold xl:text-2xl lg:text-xl md:text-lg">N4IT Software</h2>
                                <div className="flex xl:flex-row flex-col lg:flex-col md:flex-row gap-2 text-white font-semibold dark:text-teal-400">
                                    <div className="flex flex-row gap-2">
                                        <p>Web developer</p>
                                        <p className="lg:flex hidden">|</p>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <p>March 2022</p>
                                        <p>-</p>
                                        <p>Jul 2022</p>
                                    </div>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-8 items-center justify-center">
                                <li className="">
                                    <p className="flex flex-row items-center justify-start gap-2 pb-20">
                                        Internship carried out within the Technical Course of Professional Higher Education - Agile Software Development.
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        Requirements gathering, analysis and design.
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        Sprint planning.
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        Web frontend development (React).
                                    </p>
                                    <p className="flex flex-row items-center gap-2 justify-start">
                                        <MdArrowForwardIos />
                                        Backend development (Dotnet).
                                    </p>
                                </li>
                            </ul>
                        </div>
            
                    </div>
            </div>

        </section>


    );
}

export default Experience;