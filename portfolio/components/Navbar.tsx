import { FC, useCallback, useEffect, useState } from "react";
import { AiOutlineDownload } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/Io5';
import NavbarItem from "./NavbarItem";

interface NavbarProps{
    setDisplayBillboard: (res: boolean)=> void;
}

const Navbar: FC<NavbarProps> = ({ setDisplayBillboard }) => {

    const TOP_OFFSET= 20;

    const [showBackground, setShowBackground] = useState(false);
    const [variantMobileMenuContent, setVariantMobileMenuContent] = useState(false);
    const [variantMenu, setVariantMenu] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true);
                console.log('showBackground');
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    useEffect(() => {
        let lasSrollY = window.scrollY;
        const handleScrollY = () => {
            if(window.scrollY >= lasSrollY){
                setVariantMenu(true);
            } else {
                setVariantMenu(false);
            }

            lasSrollY = window.scrollY;
        }

        window.addEventListener('scroll', handleScrollY);

        return () => {
            window.removeEventListener('scroll', handleScrollY);
        }
    },[]);

    const toggleMobileMenu = useCallback(() => {
        setVariantMobileMenuContent((current) => !current);
    }, []);

    useEffect(()=>{

        if(variantMobileMenuContent){
            document.body.classList.add('overflow-hidden');
            setVariantMenu(false);
            setDisplayBillboard(true);
        }else{
            setDisplayBillboard(false);
            document.body.classList.remove('overflow-hidden');
        }


    },[variantMobileMenuContent, setDisplayBillboard, setVariantMenu]);

    return(
<>
            <div className={`h-full w-full
                backdrop-brightness-75
                bg-gray-500/20
                z-10
                lg:hidden
                top-0
                left-0
                ${variantMobileMenuContent ? 'fixed' : 'hidden' }`}>
            </div>

            <nav className={` 
                ${showBackground && 'lg:bg-white lg:bg-opacity-75 lg:z-[1] lg:transition'}
                ${variantMenu && 'hidden'}
                lg:fixed
                h-[10%]
                w-full
                flex
                flex-column
                justify-between 
                items-center
                lg:pr-8
                z-[1]
                `}
            >
                <p className={`${showBackground ? 'text-[#DDD0C8]' : 'text-white'}
                hidden
                top-1
                text-xl  
                lg:py-6
                lg:px-8
                lg:flex
                px-6
                py-6
                font-semibold`}>
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
                        <NavbarItem to="#" label="Home" showBackground={showBackground}/> 
                        <NavbarItem to="#about" label="About" showBackground={showBackground}/> 
                        <NavbarItem to="#" label="Portfolio" showBackground={showBackground}/> 
                        <NavbarItem to="#" label="Contact" showBackground={showBackground}/> 
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
                    lg:flex-row
                    ">
                        Download CV
                     <AiOutlineDownload size={20}/>
                </a>
            <div className={`
                ${!variantMobileMenuContent ? 'p-6 fixed top-0 right-0 lg:hidden w-full items-center items-right z-[1]' : 'top-0 fixed right-0 w-full h-screen z-40 bg-white rounded'}
                ${showBackground ? 'bg-white opacity-70 text-[#DDD0C8] ' : ''}`}>
                <p className={`${showBackground ? 'text-[#DDD0C8]' : 'text-white'}
                ${variantMobileMenuContent && 'hidden '}
                fixed
                top-1
                text-xl  
                lg:py-6
                lg:px-8
                px-6
                py-6
                font-semibold`}
                >
                    Marlene Condesso
                </p>
                {!variantMobileMenuContent ?
                    <div onClick={toggleMobileMenu} className={`cursor-pointer ${showBackground ? 'text-[#DDD0C8]' : 'text-white'} float-right mr-4`}>
                        <FiMenu size={30} /> 
                    </div> :
                    <div className={`${!variantMobileMenuContent ? 'translate-x-80' : 'translate-x-0'}
                        w-full
                        lg:hidden
                        flex
                        flex-col 
                        gap-10
                        top-0
                        rounded-sm
                        p-3
                    `}>
                        
                        <IoClose size={36} className="cursor-pointer text-[#DDD0C8]" onClick={toggleMobileMenu}/> 
                        <NavbarItem to="#" label="Home" onClick={toggleMobileMenu} /> 
                        <NavbarItem to="#about" label="About" onClick={toggleMobileMenu} /> 
                        <NavbarItem to="#" label="Portfolio" onClick={toggleMobileMenu} /> 
                        <NavbarItem to="#" label="Contact" onClick={toggleMobileMenu}/> 
                        <a href="#"className="flex
                            hover:border-[#DDD0C8]
                            hover:text-white
                            hover:bg-[#DDD0C8]
                            bg-white
                            text-[#DDD0C8]
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
      </>
    );
}

export default Navbar;