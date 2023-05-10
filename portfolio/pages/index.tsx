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
export default function Home() {

  const [theme, setTheme] = useState(typeof window !== 'undefined' && localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');

  const [goToInitial, setGoToInitial] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [previewCV, setPreviewCV ] = useState(false);

  const [variantMenu, setVariantMenu] = useState(false);
  const { download } = useDownloader();


  const TOP_OFFSET = 660;
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

  useEffect(() => {
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
  }, []);

  useEffect(() => {


    const handleScreenSize = () => {

        let lastScreenYSize = window.innerHeight;
        let lastScreenXSize = window.innerWidth;
        if (lastScreenYSize <= 900 || lastScreenXSize <= 1550) {
            //setShowNavbarSocial(false);
        } else {
            //setShowNavbarSocial(true);
        }
    }

    window.addEventListener('resize', handleScreenSize);

    return () => {
        window.removeEventListener('resize', handleScreenSize);
    }

}, []);

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
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

  }

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
        localStorage.removeItem('theme');
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
        <Navbar onTheme={(res) => { setTheme(res); }} showBackgroundNav={showBackground} hiddenNav={variantMenu} theme={theme!} onDownloadCV={downloadCV} />
        <NavbarMobile showBackgroundNav={showBackground} onDownloadCV={downloadCV} theme={theme!} onTheme={(res) => setTheme(res)} hiddenNav={variantMenu} />
      </header>
      <div className='gap-20 grid flex-col'>
        <Billboard />
        <About />
        <Experience />
        <TechnicalSkills />
        <Projects />
      </div>
      <footer className='m-0'>
        <Contact getTheme={theme!} />
      </footer>
      <NavbarSocial getTheme={theme!} />
      <a className={`dark:text-teal-500 text-white fixed bottom-8 right-2 cursor-pointer active:scroll-smooth hover:opacity-50  ${!goToInitial && 'hidden'}`} onClick={scrollToUp}>
        <MdKeyboardDoubleArrowUp size={80} className="animate-bounce duration-200 " />
      </a>
    </div>
  );
}
