import useCurrentUser from '@/hooks/useCurrentUser';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import About from '@/components/About';
import TechnicalSkills from '@/components/TechnicalSkills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import { Suspense, useEffect, useState } from 'react';
import Projects from '@/components/Projects';
import NavbarSocial from '@/components/NavbarSocial';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Preloader from '@/components/Preloader';
export default function Home() {

  /** 
   * CALLBACK TO POPULATE MONGODB WITH PORTFOLIO INFORMATION
  const populate = useCallback(async () => {

    try {

        await axios.post('api/populate');

    } catch (error) {
        console.log(error);
        
    }
},[]);*/


  const { data: user } = useCurrentUser();
  const [ theme, setTheme ] = useState('');

  console.log(user?.name);

//   useEffect(() => {

//     if(typeof window !== 'undefined') {
      
//     // window.addEventListener("DOMContentLoaded", function(){
//     //   console.log('olq')
//     //   const preloader = document.getElementById(
//     //     'preloader',
//     //   ) as HTMLInputElement | null;
//     //   const body = document.getElementById(
//     //     'bodyPage',
//     //   ) as HTMLInputElement | null;
//     //   if(preloader) {
//     //     console.log('ola')
//     //     preloader.style.display='none'; 
//     //     body.style.display='block';}
//     // });

//   }
//   },[]);


//   function work (text: string) {
//     console.log('work')
//   }

//   function isload () {
//     console.log('isload')
//   }

  // if (typeof document !== 'undefined'){
  //   if(document.readyState !== 'loading') {
   
  //     const preloader = document.getElementById('preloader') as HTMLInputElement | null;
  //     const body = document.getElementById('bodyPage') as HTMLInputElement | null;
  //     if(preloader && body) {
  //     console.log('ola')
  //     preloader.style.display='none'; 
  //     body.style.display='block'; 
  //     }
  //   }
  // }
    
//   }
// }   
//   if(typeof window !== 'undefined') document.addEventListener("DOMContentLoaded", () => {
//     alert("DOM ready!");
//   });


  return (
      <>
        <header>
          <Navbar onTheme={(res) => {setTheme(res)}}/>
        </header>
        <main className='px-10'>
          <Billboard />
          <About/>
          <Experience />
          {/**<WorkExperience />*/} 
          <TechnicalSkills />
          <Projects />
        </main> 
        <footer>
          <Contact getTheme={theme} />
        </footer>
        <NavbarSocial getTheme={theme}/>
      </>
    );
      {/*<p className='text-black'>Logged in as: {user?.name}</p>
       <button onClick={() => signOut()}className='
      h-10
      w-full
      bg-white'>Logout!</button> */}

  
}
