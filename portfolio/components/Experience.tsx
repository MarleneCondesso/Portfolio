import { useCallback, useEffect, useState } from "react";
import Heading from "./Heading";
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import { GrEmptyCircle } from 'react-icons/gr';
const Experience = () => {

    const [showInfo, setShowInfo] = useState('');

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
        <section className={`py-10 px-16 h-auto`}>
            <Heading title="Experience" />
            <div className="grid lg:grid-cols-2 justify-center items-center h-auto grid-col-1 ">
                <div className="
                    min-w-[250px]
                    flex 
                    lg:flex-col 
                    gap-4  
                    items-center 
                    opacity-60"
                >
                    <div className="flex flex-col gap-8 items-center p-4 max-w-[100%]">
                        <div className="flex max-sm:flex-col  md:flex-row  lg:flex-col items-center justify-center gap-4">
                            <button onClick={handleOpenOtherJobs} className="
                                bg-gray-400
                                text-black
                                h-12 
                                w-64
                                hover:bg-gray-600
                                hover:text-white
                                flex 
                                flex-row
                                items-center
                                justify-center
                                gap-4
                                rounded-md p-2"
                            >
                                Other jobs
                                <div className={`${openOtherJobs ? 'rotate-0' : 'rotate-180'}`}>
                                    <MdKeyboardArrowUp />
                                </div>
                            </button>
                            <button onClick={handleOpenProgrammingJobs} className="
                                text-black
                                hover:bg-gray-600
                                hover:text-white
                                bg-gray-400
                                h-12 
                                w-64
                                flex 
                                flex-row
                                items-center
                                justify-center
                                gap-4
                                rounded-md
                                p-2
                                "
                            >
                                Programming jobs
                                <div className={`${openProgramming ? 'rotate-0' : 'rotate-180'}`}>
                                    <MdKeyboardArrowUp />
                                </div>
                            </button>
                        </div>

                        {openOtherJobs ? (
                            <div className="
                                w-full 
                                lg:overflow-hidden 
                                overflow-x-auto 
                                border-white 
                                lg:border-4 
                                border-x-4 
                                border-t-4 
                                lg:rounded-lg 
                                rounded-t-lg"
                            >
                                <ul className="flex flex-row  lg:flex-col lg:items-center lg:justify-center p-2 pt-4 text-white">
                                    <li onClick={() => { setShowInfo('upn'); setSelectExperience(true);}} className=" mb-2">
                                        <button className="
                                            text-white
                                            hover:bg-gray-600
                                            h-12 
                                            w-56
                                            min-w-[100px]
                                            rounded-md
                                            md:w-24
                                            items-center
                                            justify-center">
                                            UPN
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('bvf'); setSelectExperience(true);}} className=" mb-2">
                                        <button className="
                                            text-white
                                            hover:bg-gray-600
                                            h-12 
                                            w-56
                                            rounded-md
                                            items-center
                                            justify-center"
                                        >
                                            Bombeiros Voluntário de Fão
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('e2000'); setSelectExperience(true);}} className=" mb-2">
                                        <button className="
                                            text-white
                                            hover:bg-gray-600
                                            h-12 
                                            w-56
                                            rounded-md
                                            items-center
                                            justify-center"
                                        >
                                            Esposende2000
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('fm'); setSelectExperience(true);}} className=" mb-2">
                                        <button className="
                                            text-white
                                            hover:bg-gray-600
                                            h-12 
                                            w-56
                                            rounded-md
                                            flex 
                                            flex-row
                                            items-center
                                            justify-center"
                                        >
                                            FM Têxteis S.A
                                        </button>
                                    </li>
                                    <li onClick={() => { setShowInfo('dh'); setSelectExperience(true);}} className=" mb-2">
                                        <button className="
                                            text-white
                                            hover:bg-gray-600
                                            h-12 
                                            w-56
                                            rounded-md
                                            flex 
                                            flex-row
                                            items-center
                                            justify-center"
                                        >
                                            Dolores Hipólito, Unipessoal, LDA
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : null}
                        {openProgramming ? (

                            <div className="
                                w-full 
                                lg:overflow-hidden 
                                overflow-x-auto 
                                border-white"
                            >
                                <ul className="flex flex-col lg:items-center lg:justify-center text-white">
                                    <li onClick={() => {setShowInfo('n4');setSelectExperience(true);}} className="mb-2">
                                        <button className="
                                         text-white
                                         hover:bg-gray-600
                                         h-12
                                         w-56
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
                    </div>

                    <div className="flex flex-col  gap-10 items-center  min-w-[200px] justify-center bg-gray-400 rounded-md">


                    </div>
                </div>
                <div className="bg-gray-400 bg-opacity-25 h-auto w-full p-6 rounded-3xl">


                    <div className={`
                    flex-col
                    items-center
                    justify-center
                    gap-16
                    p-10
                    w-full
                    h-full
                    ${!selectExperience ? 'flex' : 'hidden'}`}>
                        <GrEmptyCircle size={50}/>
                        <p>No experience select</p>
                    </div>

                    <div className={`
                        h-auto 
                        w-full 
                        flex 
                        flex-col 
                        gap-8 items-center 
                        justify-center 
                        text-white 
                        ${showInfo === 'upn' ? 'flex' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <h2 className="font-semibold">UPN - União de Produtores Hortículas do Norte, LDA</h2>
                            <div className="flex lg:flex-row flex-col gap-2 text-gray-600">
                                <div className="flex flex-row gap-1">
                                    <p>Agricultural producer</p>
                                    <p>|</p>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <p>Jul 2013</p>
                                    <p>-</p>
                                    <p>Sep 2015</p>
                                </div>
                            </div>
                        </div>

                        <ul className="flex flex-col gap-2 w-72 items-center justify-center">
                            <li>
                                <p className="flex flex-row items-center justify-center gap-2">
                                    <MdArrowForwardIos size={20} />
                                    Land treatment for future crops
                                </p>
                            </li>
                            <li>
                                <p className="flex flex-row items-center justify-center gap-2">
                                    <MdArrowForwardIos size={20} />
                                    Production of vegetable crops
                                </p>
                                <div className="p-4 w-32 flex flex-col items-start justify-start">
                                    <p className="flex flex-row items-center gap-2">
                                        <MdArrowForwardIos size={20} />Seeding</p>
                                    <p className="flex flex-row items-center justify-between gap-2">
                                        <MdArrowForwardIos size={20} />Fertilizing</p>
                                    <p className="flex flex-row items-center justify-center gap-2">
                                        <MdArrowForwardIos size={20} />Cleaning</p>
                                    <p className="flex flex-row items-center justify-center gap-2">
                                        <MdArrowForwardIos size={20} />Irrigation</p>
                                    <p className="flex flex-row items-center justify-center gap-2">
                                        <MdArrowForwardIos size={20} />Pruning</p>
                                    <p className="flex flex-row items-center justify-center gap-2">
                                        <MdArrowForwardIos size={20} />Harvests</p>
                                </div>

                            </li>
                        </ul>

                    </div>

                    <div className="flex items-start">
                        <div className={`
                            h-auto 
                            w-full 
                            items-center 
                            lg:items-start 
                            justify-center 
                            flex 
                            flex-col 
                            gap-8 
                            p-4 
                            text-white 
                            ${showInfo === 'bvf' ? 'flex' : 'hidden'}`}
                        >
                            <div className="grid grid-cols-1 gap-4">
                                <h2 className="font-semibold text-lg">Bombeiros Voluntários de Fão</h2>
                                <div className="flex lg:flex-row flex-col gap-2 text-gray-600">
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

                            <ul className="flex flex-col lg:p-6 gap-2 items-center justify-center">
                                <li>
                                    <p className="flex items-start">
                                        Professional Intership carried out by the scope of Technical Course of the Environmental Management
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
                                        Patrolling forest areas at risk
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
                        text-white 
                        ${showInfo === 'e2000' ? 'flex' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <h2 className="font-semibold text-lg">Esposende 2000</h2>
                            <div className="flex lg:flex-row flex-col gap-2 text-gray-600">
                                <div className="flex flex-row gap-2">
                                    <p>Assistant in the organization of sports and recreational activities</p>
                                    <p className="lg:flex hidden">|</p>
                                </div>
                                <div className="flex flex-row gap-2 text-sm items-center">
                                    <p>April 2016</p>
                                    <p>-</p>
                                    <p>Jul 2016</p>
                                </div>
                            </div>
                        </div>

                        <ul className="flex flex-col lg:p-6 gap-2 items-center justify-center">
                            <li>
                                <p className="flex items-start">
                                    Professional Intership carried out by the scope of Technical Course of the Environmental Management
                                </p>
                            </li>
                            <li className="">
                                <p className="flex flex-row items-center  justify-start gap-2">
                                    <MdArrowForwardIos />
                                    Planning sports activities:
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    Trails
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    Walks
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    BTT Racing
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
                        text-white 
                        ${showInfo === 'fm' ? 'flex' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <h2 className="font-semibold text-lg">FM Têxteis S.A.</h2>
                            <div className="flex lg:flex-row flex-col gap-2 text-gray-600">
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
                                <p className="flex flex-row items-center  justify-start gap-2">
                                    Textile operator in:
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    Cutting sectior (Main charge)
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    Packing sector
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    Confection sector
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
                        text-white 
                        ${showInfo === 'dh' ? 'flex' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <h2 className="font-semibold text-lg">Dolores Hipólito, Unipessoal, LDA</h2>
                            <div className="flex lg:flex-row flex-col gap-2 text-gray-600">
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
                                <p className="flex flex-row items-center  justify-start gap-2">
                                    Textile operator in:
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    Packing sector
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    Confection sector
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
                        text-white 
                        ${showInfo === 'n4' ? 'flex' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <h2 className="font-semibold text-lg">N4IT Software</h2>
                            <div className="flex lg:flex-row flex-col gap-2 text-gray-600">
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
                                <p className="flex flex-row items-center  justify-start gap-2">
                                    Internship carried out within the Technical Course of Professional Higher Education - Agile Software Development
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    Requirements gathering, analysis and design
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    Sprint planning
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    Web frontend development (React)
                                </p>
                                <p className="flex flex-row items-center gap-2 justify-start">
                                    <MdArrowForwardIos />
                                    Backend development (Dotnet)
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