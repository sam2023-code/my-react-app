import logo_Home_Jason from '../assets/Home_Jason.png'
import '../css/Home.css';

import i18n from '../i18n.jsx' ; // Import the i18n configuration
import { useTranslation } from 'react-i18next';

function Home() { 

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <>
      <h1>{t('hello')}</h1>
      <img src={logo_Home_Jason} alt="" className='logo_Home_Jason' />
    </>
  );
}

export default Home