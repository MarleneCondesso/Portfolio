import i18next, { changeLanguage } from 'i18next';
import iconUSA from '../public/icon/liberia.png';
import iconPT from '../public/icon/portugal.png';


const NavbarLanguage = () => {


  return (
    <div className='flex flex-row gap-2 bg-slate-500 dark:bg-teal-800 rounded-md p-2 bg-opacity-60'>
    <button onClick={() => i18next.changeLanguage('pt')} className={`${i18next.language === 'pt' ? 'brightness-100 cursor-default' : 'brightness-75 cursor-pointer hover:brightness-100 '}  `}>
        <img src={iconPT.src} alt='pt' className={`h-4 `} />
    </button>
    <button onClick={() => i18next.changeLanguage('en')} className={`${i18next.language === 'en' ? 'brightness-100 cursor-default' : 'brightness-75 cursor-pointer hover:brightness-100 '}`}  >
        <img src={iconUSA.src} alt='en' className={`h-4 `} />
    </button>

</div>
  )
}

export default NavbarLanguage