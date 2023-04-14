import { getSession, signOut } from 'next-auth/react';
import { NextPageContext } from 'next';

import useCurrentUser from '@/hooks/useCurrentUser';


export async function getServerSideProps(context: NextPageContext){
  
  const session = await getSession(context);

  if(!session) return {
    redirect: {
      destination: '/auth',
      permament: false,
    }
  }

  return {
    props: {}
  }
}




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
console.log(user?.name);


  return (
    <>
      <h1>PORTFOLIO</h1>
      <p className='text-black'>Logged in as: {user?.name}</p>
      <button onClick={() => signOut()}className='
      h-10
      w-full
      bg-white'>Logout!</button>
    </>
  )
}
