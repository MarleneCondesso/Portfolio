import { getSession, signOut } from 'next-auth/react';
import { NextPageContext } from 'next';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useCurrentUser from '@/hooks/useCurrentUser';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import Head from 'next/head';
import About from '@/components/About';
import { useState } from 'react';
import WorkExperience from '@/components/WorkExperience';
import TechnicalSkills from '@/components/TechnicalSkills';
// import Head from 'next/head';


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

const [ valueOfBillboard, setValueOfBillboard ] = useState<boolean>(false);

const { data: user } = useCurrentUser();
console.log(user?.name);

  return (
    <>
    
      <Head>
        <title>Marlene Condesso | Portfolio</title>
        <meta name='description' />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
        <header>
          <Navbar setDisplayBillboard={(res)=> {setValueOfBillboard(res); console.log(res)}}/>
        </header>
        <main>
          <Billboard setValueOfDisplay={valueOfBillboard}/>
          <About/>
          <WorkExperience />
          <TechnicalSkills />
        </main>  
    
      {/*<p className='text-black'>Logged in as: {user?.name}</p>
       <button onClick={() => signOut()}className='
      h-10
      w-full
      bg-white'>Logout!</button> */}

    </>
  )
}
