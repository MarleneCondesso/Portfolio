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
import NavbarMobile from '@/components/NavbarMobile';
import useDownloader from 'react-use-downloader';
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationPT from "../public/locales/pt/portuguese.json";
import translationEN from "../public/locales/en/english.json";

const resources = {
   en: {
    translationAboutMe: translationEN['about-me'],
    translationExperience: translationEN['experience'],
    translationTechnicalSkills: translationEN['technical-skills'],
    translationProjects: translationEN['projects'],
    translationContact: translationEN['contact'],
    translationNavbar: translationEN['navbar']
  },
  pt: {
    translationAboutMe: translationPT['about-me'],
    translationExperience: translationPT['experience'],
    translationProjects: translationPT['projects'],
    translationContact: translationPT['contact'],
    translationNavbar: translationPT['navbar']
  }
  /*fr: {
    translation: translationFR,
  },
  es: {
    translation: translationES, 
  },*/
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});


export default function Home() {

  const [theme, setTheme] = useState(typeof window !== 'undefined' && localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');

  const [goToInitial, setGoToInitial] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [variantMenu, setVariantMenu] = useState(false);
  const { download } = useDownloader();
  const [ language, setLanguage ] = useState(i18n.language);
  const TOP_OFFSET = 600;
   useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
        setGoToInitial(true);
      } else {
        setShowBackground(false);
        setGoToInitial(false);
      }
    }
    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    }
  }, []);
 
/*   useEffect(() => {
    let lastSrollY = window.scrollY;
    
     const handleScrollY = () => {
      if (window.scrollY >= lastSrollY) {
        setVariantMenu(true);
      } else {
        setVariantMenu(false);
      }
      lastSrollY = window.scrollY;
    }

    window.addEventListener('scroll', handleScrollY);

    return () => {
      window.removeEventListener('scroll', handleScrollY);
    }
  }, []); */

  const downloadCV = () => {
    const fileUrl = "/files/CVMarleneLima.pdf";
    const filename = "CVMarleneLima.pdf";

    download(fileUrl, filename)

  }
  const onWindowMatch = () => {
    if (typeof window !== 'undefined') {
      let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    }
  }

  useEffect(() => {
   // i18n.changeLanguage(language);
    console.log(language)
  }, [language])



  useEffect(() => {
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        //localStorage.setItem('themeDefault', 'true');
        onWindowMatch();
        break;
    }

  }, [theme]);

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }



  return (
    <div className='p-10 2xl:p-60 xl:p-28 lg:p-20'>
      <header>
        <Navbar onTheme={(res) => { setTheme(res); }} showBackgroundNav={showBackground} hiddenNav={variantMenu} theme={theme!} onDownloadCV={downloadCV} setLanguage={(res) => i18n.changeLanguage(res)} language={language}/>
        <NavbarMobile showBackgroundNav={showBackground} onDownloadCV={downloadCV} theme={theme!} onTheme={(res) => setTheme(res)} hiddenNav={variantMenu} language={language} setLanguage={(res) => {setLanguage(res); console.log(res)  }} />
      </header>
      <div className='flex flex-col' id='container'>
        <Billboard />
        <About />
        <Experience />
        <TechnicalSkills />
        <Projects />
      </div>
      <footer className='m-0 p-5'>
        <Contact getTheme={theme!} />
      </footer>
      <NavbarSocial getTheme={theme!} />
      <a className={`dark:text-teal-500 text-slate-700 fixed bottom-8 right-2 cursor-pointer active:scroll-smooth hover:opacity-50  ${!goToInitial && 'hidden'}`} onClick={scrollToUp}>
        <MdKeyboardDoubleArrowUp size={50} className="animate-bounce duration-200" />
      </a>
    </div>
  );
}
