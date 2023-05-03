import useCurrentUser from '@/hooks/useCurrentUser';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import About from '@/components/About';
import TechnicalSkills from '@/components/TechnicalSkills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import { useEffect, useState } from 'react';
import Projects from '@/components/Projects';
import NavbarSocial from '@/components/NavbarSocial';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

export default function Home() {

  const [ theme, setTheme ] = useState('');
  const [ goToInitial, setGoToInitial] = useState(false);

  const TOP_OFFSET= 20;
  useEffect(() => {
  
    const handleScrollY = () => {
        if(window.scrollY >= TOP_OFFSET){
          setGoToInitial(true);
        } else {
          setGoToInitial(false);
        }
    }

    window.addEventListener('scroll', handleScrollY);

    return () => {
        window.removeEventListener('scroll', handleScrollY);
    }
},[]);


  return (
      <div className='w-full'>
        <header>
          <Navbar onTheme={(res) => {setTheme(res)}}/>
        </header>
        <main className='w-full'>
          <Billboard />
          <About/>
          <Experience />
          <TechnicalSkills />
          <Projects />
        </main> 
        <footer>
          <Contact getTheme={theme} />
        </footer>
        <NavbarSocial getTheme={theme}/>
        <div className={`text-teal-500 fixed bottom-8 right-8 ${!goToInitial && 'hidden' }`}>
          <MdKeyboardDoubleArrowUp size={60} className="animate-bounce duration-200 "/>
        </div>
      </div>
    );

  
}
