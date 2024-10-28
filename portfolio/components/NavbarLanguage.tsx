import i18next, { changeLanguage } from 'i18next';
import iconEnDark from '../public/icon/en-dark.png';
import iconPTDark from '../public/icon/pt-dark.png';
import iconEnLight from '../public/icon/en-light.png';
import iconPTLight from '../public/icon/pt-light.png';
import { FC } from 'react';

interface NavbarLanguage {
  theme: string;
}

const NavbarLanguage: FC<NavbarLanguage> = ({
  theme
}) => {


  return (
    <div className='flex flex-row gap-2 bg-slate-500 dark:bg-slate-600 rounded-md p-2 bg-opacity-60'>
      <button onClick={() => i18next.changeLanguage('pt')} className={`${i18next.language === 'pt' ? 'brightness-100 cursor-default' : 'brightness-75 cursor-pointer hover:brightness-100 '}  `}>
        {theme === 'light' ?
          <img src={iconPTLight.src} alt='pt-light' className={`h-4`} />
          :
          <img src={iconPTDark.src} alt='pt-dark' className={`h-4`} />}

      </button>
      <button onClick={() => i18next.changeLanguage('en')} className={`${i18next.language === 'en' ? 'brightness-100 cursor-default' : 'brightness-75 cursor-pointer hover:brightness-100 '}`}  >
        {theme === 'light' ?
          <img src={iconEnLight.src} alt='en-light' className={`h-4 `} />
          :
          <img src={iconEnDark.src} alt='en-dark' className={`h-4 `} />
        }
      </button>

    </div>
  )
}

export default NavbarLanguage