import { FC, useCallback, useEffect, useState } from "react";
import { AiOutlineDownload } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/Io5';
import NavbarItem from "./NavbarItem";

interface NavbarProps{
    setDisplayBillboard: (res: boolean)=> void;
}

const Navbar: FC<NavbarProps> = ({ setDisplayBillboard }) => {

    const TOP_OFFSET = 20;
    const TOP_OFFSETGray = 600;
    const TOP_OFFSETPink = 1400;

    const [showBackground, setShowBackground] = useState(false);
    const [showBackgroundGray, setShowBackgroundGray] = useState(false);
    const [showBackgroundPink, setShowBackgroundPink] = useState(false);
    const [variantMobileMenu, setVariantMobileMenu] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    useEffect(()=>{
        const handleScrollGray = () => {
            if(window.scrollY >= TOP_OFFSETGray){
                setShowBackgroundGray(true);
            } else {
                setShowBackgroundGray(false);
            }
        }

        window.addEventListener('scroll', handleScrollGray);

        return () => {
            window.removeEventListener('scroll', handleScrollGray);
        }

    },[]);
    useEffect(()=>{
        const handleScrollPink = () => {
            if(window.scrollY >= TOP_OFFSETPink){
                setShowBackgroundPink(true);
            } else {
                setShowBackgroundPink(false);
            }
        }

        window.addEventListener('scroll', handleScrollPink);

        return () => {
            window.removeEventListener('scroll', handleScrollPink);
        }

    },[]);
    
    const toggleMobileMenu = useCallback(() => {
        setVariantMobileMenu((current) => !current);
    }, []);

    useEffect(()=>{

        if(variantMobileMenu){
            setDisplayBillboard(true);
        }else{
            setDisplayBillboard(false);
        }

    },[variantMobileMenu, setDisplayBillboard]);

    return(
        // <div className="
        // fixed
        // top-0
        // w-full
        // z-4">
        //     <div className={`container
        //     flex
        //     justify-between
        //     items-center
        //     py-5
        //     px-4
        //     ${showBackground ? 'bg-white bg-opacity-75 transition' : ' '}`}>
        //         <p className="text-xl text-white">
        //             Marlene Condesso
        //         </p>
        //         <div className="hidden lg:flex gap-6">
        //             <NavbarItem href="/" label="Home"/> 
        //             <NavbarItem href="/about" label="About"/> 
        //             <NavbarItem href="/portfolio" label="Portfolio"/> 
        //             <NavbarItem href="/contact" label="Contact"/> 
        //         </div>
        //         <a href="#"className="
        //         lg:flex
        //         hidden
        //         border-[#DDD0C8]
        //         text-[#DDD0C8]
        //         bg-white
        //         hover:bg-[#DDD0C8]
        //         hover:text-white
        //         hover:border-white
        //         px-4
        //         py-1
        //         rounded-md
        //         items-center
        //         gap-2
        //         transition
        //         duration-75
        //         cursor-pointer
        //         flex
        //         flex-row">
        //             Download CV
        //             <AiOutlineDownload size={20}/>
        //         </a>
        //         <div className={`${!variantMobileMenu ? 'z-0' : 'z-10 h-[100vhm] w-[40%] bg-white'}  rounded`}>
        //             <div onClick={toggleMobileMenu} className="cursor-pointer lg:hidden block">
        //                 {variantMobileMenu ? 
        //                     <IoClose size={30} /> :
        //                     <FiMenu size={30}/> 
        //                 }
        //             </div>
        //             <div className={`${!variantMobileMenu ? 'translate-x-80' : '-translate-x-0'}
        //             h-full
        //             lg:hidden
        //             flex
        //             flex-col
        //             rounded-sm
        //             `}>
        //                 <NavbarItem href="/" label="Home"/> 
        //                 <NavbarItem href="/about" label="About"/> 
        //                 <NavbarItem href="/portfolio" label="Portfolio"/> 
        //                 <NavbarItem href="/contact" label="Contact"/> 
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="h-full w-full" id="#">
            <div className={`h-full w-full
                top: 0
                left: 0
                backdrop-brightness-75
                bg-gray-500/20
                z-10
                lg:hidden
                ${variantMobileMenu ? 'fixed' : 'hidden' }`}>
            </div>

            <nav className={` 
                ${showBackground && 'lg:bg-white lg:bg-opacity-75 lg:z-[1] lg:transition'}
                ${showBackgroundGray && 'lg:bg-gray-600 lg:bg-opacity-75 lg:z-[1] lg:transition'}
                ${showBackgroundPink && 'lg:bg-[#DDD0C8] lg:bg-opacity-75 lg:z-[1] lg:transition'}
                lg:fixed
                lg:h-[10%]
                h-full
                w-full
                flex
                flex-column
                justify-between 
                lg:items-center
                lg:pr-8
                z-[1]
                `}
            >
                <p className={`${showBackground && 'lg:text-[#DDD0C8]'}
                ${showBackgroundPink && 'lg:text-white'}
                text-xl 
                text-white 
                px-8 
                lg:py-6 `}>
                    Marlene Condesso
                 </p>
                <div className="
                px-4
                md:px-16
                py-2
                flex-row
                items-center
                justify-center
                transition
                duration-500
                bg-opacity-90
                hidden
                lg:flex">
                    <div className={`
                        flex-row
                        ml-8
                        flex
                        gap-10`}>
                        <NavbarItem to="#" label="Home" showBackgroundWhite={showBackground} showBackgroundPink={showBackgroundPink}/> 
                        <NavbarItem to="#about" label="About" showBackgroundWhite={showBackground} showBackgroundPink={showBackgroundPink}/> 
                        <NavbarItem to="#" label="Portfolio" showBackgroundWhite={showBackground} showBackgroundPink={showBackgroundPink}/> 
                        <NavbarItem to="#" label="Contact" showBackgroundWhite={showBackground}showBackgroundPink={showBackgroundPink}/> 
                    </div>
                </div> 
                <a href="#"className="
                    lg:flex
                    lg:h-[50%]
                    hidden
                    border-[#DDD0C8]
                    text-[#DDD0C8]
                    bg-white
                    hover:bg-[#DDD0C8]
                    hover:text-white
                    hover:border-white
                    px-4
                    h-[50%]
                    rounded-md
                    items-center
                    justify-center
                    gap-2
                    transition
                    duration-75
                    cursor-pointer
                    flex
                    flex-row">
                        Download CV
                     <AiOutlineDownload size={20}/>
                </a>
                <div className={`${!variantMobileMenu ? 'lg:hidden' : ' h-screen z-40 w-[40%] bg-white lg:hidden'}  rounded`}>
                {!variantMobileMenu ?
                    <div onClick={toggleMobileMenu} className="cursor-pointer">
                        <FiMenu size={30} /> 
                    </div> :
                    <div className={`${!variantMobileMenu ? 'translate-x-80' : 'translate-x-0'}
                        h-full
                        lg:hidden
                        flex
                        flex-col 
                        gap-10
                        rounded-sm
                    `}>
                        
                        <IoClose size={30} className="cursor-pointer" onClick={toggleMobileMenu}/> 
                        <NavbarItem to="#" label="Home" onClick={toggleMobileMenu} /> 
                        <NavbarItem to="#about" label="About" onClick={toggleMobileMenu} /> 
                        <NavbarItem to="#" label="Portfolio" onClick={toggleMobileMenu} /> 
                        <NavbarItem to="#" label="Contact" onClick={toggleMobileMenu}/> 
                        <a href="#"className="flex
                            hover:border-[#DDD0C8]
                            hover:text-[#DDD0C8]
                            hover:bg-white
                            bg-[#DDD0C8]
                            text-white
                            border-white
                            justify-center
                            px-4
                            h-10
                            mx-1
                            rounded-md
                            items-center
                            transition
                            duration-75
                            cursor-pointer
                            flex
                            flex-row"
                        >
                            Download CV
                            <AiOutlineDownload size={20}/>
                        </a>
                    </div>
                     }
                </div>
            </nav>
        </div>
    );
}

export default Navbar;