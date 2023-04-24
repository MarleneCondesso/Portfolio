import useCurrentUser from '@/hooks/useCurrentUser';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import About from '@/components/About';
import TechnicalSkills from '@/components/TechnicalSkills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import { useState } from 'react';
import Projects from '@/components/Projects';
import NavbarSocial from '@/components/NavbarSocial';

export default function Home() {

  const [ theme, setTheme ] = useState('');

  return (
      <div className='w-screen sm:w-[230vw]'>
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
        <footer className='max-md:w-[130vw] max-sm:w-[200vw]'>
          <Contact getTheme={theme} />
        </footer>
        <NavbarSocial getTheme={theme}/>
      </div>
    );

  
}
