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
        <section className={`
            py-10 
            px-16 
            h-auto 
        `}>
            <Heading title="Experience" />
                <div className="
                    grid 
                    grid-cols-1 
                    gap-8 
                    justify-center 
                    items-center 
                    h-auto 
                    lg:grid-cols-[480px_minmax(400px,_2fr)]
                    "
                > 
                    <div className="
                        min-w-[250px]
                        flex 
                        lg:flex-col 
                        gap-4  
                        items-center 
                        bg-opacity-60"
                    >
                        <div className={`flex flex-col gap-8 dark:gap-10 max-w-[100%]`}>
                            <div className="
                                flex 
                                bg-slate-400 
                                bg-opacity-25 
                                rounded-xl
                                max-sm:flex-col 
                                flex-col 
                                min-w-[213px] 
                                max-w-[100%] 
                                lg:pl-0 
                                lg:flex-col 
                                gap-4 
                                justify-start"
                            >
                                <div className="flex max-sm:flex-col flex-col min-w-[450px] max-w-[100%] lg:pl-0 lg:flex-col gap-4">
                                    <button onClick={handleOpenProgrammingJobs} className="
                                        text-slate-700
                                        hover:text-black
                                        dark:hover:text-teal-200
                                        dark:text-white
                                        h-12 
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
                                            text-gray-700
                                            dark:text-teal-200
                                            dark:hover:text-white
                                            hover:underline
                                            underline-offset-[12px]
                                            focus:underline
                                            hover:text-gray-900
                                            focus:text-gray-900
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
                                text-slate-700
                                hover:text-black
                                dark:hover:text-teal-200
                                dark:text-white
                                pb-8
                                pl-8
                                h-12 
                                w-64
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
                                w-full 
                                lg:overflow-hidden 
                                overflow-x-auto
                                dark:scrollbar-track-teal-500 
                                dark:scrollbar-thumb-slate-600 
                                scrollbar-thumb-rounded-lg 
                                scrollbar-thin 
                                scrollbar-track-[#DDD0C8] 
                                scrollbar-thumb-gray-500"
                            >
                                <ul className="flex flex-row lg:flex-col lg:items-center lg:justify-center text-white">
                                    <li onClick={() => { setShowInfo('dh'); setSelectExperience(true);}}>
                                        <button className="
                                            text-black
                                            dark:text-teal-200
                                            hover:underline
                                            underline-offset-[12px]
                                            focus:underline
                                            hover:text-slate-700
                                            focus:text-slate-700
                                            dark:hover:text-white
                                            dark:focus:text-white
                                            font-semibold
                                            h-12 
                                            w-64
                                            rounded-md
                                            flex 
                                            flex-row
                                            items-center
                                            justify-center
                                            text-md"
                                        >
                                            Dolores Hipólito, Unipessoal, LDA
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('fm'); setSelectExperience(true);}}>
                                        <button className="
                                            text-black
                                            dark:text-teal-200
                                            hover:underline
                                            underline-offset-[12px]
                                            focus:underline
                                            hover:text-slate-700
                                            focus:text-slate-700
                                            dark:hover:text-white
                                            dark:focus:text-white
                                            font-semibold
                                            h-12 
                                            w-32
                                            rounded-md
                                            flex 
                                            flex-row
                                            items-center
                                            justify-center"
                                        >
                                            FM Têxteis S.A
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('e2000'); setSelectExperience(true);}}>
                                        <button className="
                                            text-black
                                            dark:text-teal-200
                                            hover:underline
                                            underline-offset-[12px]
                                            focus:underline
                                            hover:text-slate-700
                                            focus:text-slate-700
                                            dark:hover:text-white
                                            dark:focus:text-white
                                            font-semibold
                                            h-12 
                                            w-32
                                            rounded-md
                                            items-center
                                            justify-center"
                                        >
                                            Esposende2000
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('bvf'); setSelectExperience(true);}}>
                                        <button className="
                                            text-black
                                            font-semibold
                                            dark:text-teal-200
                                            hover:underline
                                            underline-offset-[12px]
                                            focus:underline
                                            hover:text-slate-700
                                            focus:text-slate-70
                                            dark:hover:text-white
                                            dark:focus:text-white
                                            font-semibold
                                            h-12 
                                            w-56
                                            rounded-md
                                            items-center
                                            justify-center"
                                        >
                                            Bombeiros Voluntário de Fão
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('upn'); setSelectExperience(true);}}>
                                        <button className="
                                            text-black
                                            dark:text-teal-200
                                            hover:underline
                                            underline-offset-[12px]
                                            focus:underline
                                            hover:text-slate-700
                                            focus:text-slate-700
                                            dark:hover:text-white
                                            dark:focus:text-white
                                            h-12 
                                            w-32
                                            min-w-[100px]
                                            rounded-md
                                            md:w-24
                                            items-center
                                            justify-center
                                            font-semibold">
                                            UPN
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : null}
                        </div>

                    </div>
                </div>
                <div className="
                    bg-slate-400 
                    bg-opacity-25 
                    h-auto w-full 
                    p-6 
                    rounded-3xl
                    flex
                    flex-col
                    items-center
                    justify-center"
                >

                    <div className={`
                        h-auto 
                        w-full 
                        flex 
                        flex-col 
                        gap-8 
                        lg:items-start 
                        justify-center 
                        dark:text-white 
                        text-black
                        p-4
                        ${showInfo === 'upn' ? 'flex' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <h2 className="font-semibold">UPN - União de Produtores Hortículas do Norte, LDA</h2>
                            <div className="flex lg:flex-row flex-col gap-2 font-semibold text-slate-500 dark:text-teal-400">
                                <div className="flex flex-row gap-1">
                                    <p>Agricultural producer</p>
                                    <p>|</p>
                                </div>
                                <div className="flex flex-row gap-2 text-sm">
                                    <p>Jul 2013</p>
                                    <p>-</p>
                                    <p>Sep 2015</p>
                                </div>
                            </div>
                        </div>

                        <ul className="flex flex-col gap-2 w-72 items-start justify-center">
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
                            <div className="p-4 w-32 flex flex-col items-start justify-start">
                                    <p className="flex flex-row items-center gap-2">
                                        <MdArrowForwardIos size={12} />Seeding.</p>
                                    <p className="flex flex-row items-center justify-between gap-2">
                                        <MdArrowForwardIos size={12} />Fertilizing.</p>
                                    <p className="flex flex-row items-center justify-center gap-2">
                                        <MdArrowForwardIos size={12} />Cleaning.</p>
                                    <p className="flex flex-row items-center justify-center gap-2">
                                        <MdArrowForwardIos size={12} />Irrigation.</p>
                                    <p className="flex flex-row items-center justify-center gap-2">
                                        <MdArrowForwardIos size={12} />Pruning.</p>
                                    <p className="flex flex-row items-center justify-center gap-2">
                                        <MdArrowForwardIos size={12} />Harvests.</p>
                                </div>

                            </li>
                        </ul>

                    </div>

                    <div className="flex items-start">
                        <div className={`
                            h-auto 
                            w-full 
                            justify-center 
                            flex 
                            flex-col 
                            gap-8  
                            p-4
                            dark:text-white
                            text-black
                            ${showInfo === 'bvf' ? 'flex' : 'hidden'}`}
                        >
                            <div className="grid grid-cols-1 gap-4">
                                <h2 className="font-semibold text-lg">Bombeiros Voluntários de Fão</h2>
                                <div className="flex lg:flex-row flex-col gap-2 font-semibold text-slate-500 dark:text-teal-400">
                                    <div className="flex flex-row gap-2">
                                        <p>Forest security assistent</p>
                                        <p className="lg:flex hidden">|</p>
                                    </div>
                                    <div className="flex flex-row gap-2 text-sm items-center">
                                        <p>May 2015</p>
                                        <p>-</p>
                                        <p>Jul 2015</p>
                                    </div>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-2 items-center justify-center">
                                <li>
                                    <p className="flex items-start pb-8">
                                        Professional Intership carried out by the scope of Technical Course of the Environmental Management.
                                    </p>
                                </li>
                                <li className="">
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
                    </div>

                    <div className={`
                        h-auto 
                        w-full 
                        lg:items-start 
                        flex 
                        flex-col 
                        gap-8 
                        p-4 
                        dark:text-white
                        text-black 
                        ${showInfo === 'e2000' ? 'flex' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <h2 className="font-semibold text-lg">Esposende 2000</h2>
                            <div className="flex lg:flex-row flex-col gap-2 font-semibold text-slate-500 dark:text-teal-400">
                                <div className="flex flex-row gap-2">
                                    <p>Assistant in the organization of sports and <br></br>recreational activities</p>
                                    <p className="lg:flex hidden">|</p>
                                </div>
                                <div className="flex flex-row gap-2 text-sm">
                                    <p>April 2016</p>
                                    <p>-</p>
                                    <p>Jul 2016</p>
                                </div>
                            </div>
                        </div>

                        <ul className="flex flex-col lg:p-6 gap-2 justify-center">
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
                        h-auto 
                        w-full 
                        lg:items-start 
                        flex 
                        flex-col 
                        gap-8 
                        p-4 
                        dark:text-white 
                        text-black
                        ${showInfo === 'fm' ? 'flex' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <h2 className="font-semibold text-lg">FM Têxteis S.A.</h2>
                            <div className="flex lg:flex-row flex-col gap-2 font-semibold text-slate-500 dark:text-teal-400">
                                <div className="flex flex-row gap-2">
                                    <p>Textile machine operator</p>
                                    <p className="lg:flex hidden">|</p>
                                </div>
                                <div className="flex flex-row gap-2 text-sm items-center">
                                    <p>Jan 2017</p>
                                    <p>-</p>
                                    <p>Jan 2019</p>
                                </div>
                            </div>
                        </div>

                        <ul className="flex flex-col lg:p-6 gap-2 items-center justify-center">
                            <li className="">
                                <p className="flex flex-row items-center  justify-start gap-2 pb-8">
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
                        h-auto 
                        w-full 
                        lg:items-start 
                        flex 
                        flex-col 
                        gap-8 
                        p-4 
                        dark:text-white 
                        text-black
                        ${showInfo === 'dh' ? 'flex' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <h2 className="font-semibold text-lg">Dolores Hipólito, Unipessoal, LDA</h2>
                            <div className="flex lg:flex-row flex-col gap-2 font-semibold text-slate-500 dark:text-teal-400">
                                <div className="flex flex-row gap-2">
                                    <p>Textile machine operator</p>
                                    <p className="lg:flex hidden">|</p>
                                </div>
                                <div className="flex flex-row gap-2 text-sm items-center">
                                    <p>Out 2019</p>
                                    <p>-</p>
                                    <p>Out 2020</p>
                                </div>
                            </div>
                        </div>

                        <ul className="flex flex-col lg:p-6 gap-2 items-center justify-center">
                            <li className="">
                                <p className="flex flex-row items-center  justify-start gap-2 pb-8">
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
                        h-auto 
                        w-full 
                        lg:items-start 
                        flex 
                        flex-col 
                        gap-8 
                        p-4 
                        dark:text-white 
                        text-black
                        ${showInfo === 'n4' ? 'flex' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <h2 className="font-semibold text-lg">N4IT Software</h2>
                            <div className="flex lg:flex-row flex-col gap-2 text-slate-500 font-semibold dark:text-teal-400">
                                <div className="flex flex-row gap-2">
                                    <p>Web developer</p>
                                    <p className="lg:flex hidden">|</p>
                                </div>
                                <div className="flex flex-row gap-2 text-sm items-center">
                                    <p>March 2022</p>
                                    <p>-</p>
                                    <p>Jul 2022</p>
                                </div>
                            </div>
                        </div>

                        <ul className="flex flex-col lg:p-6 gap-2 items-center justify-center">
                            <li className="">
                                <p className="flex flex-row items-center  justify-start gap-2 pb-8">
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