import logo_Home_Jason from '../assets/Home_Jason.png'
import '../css/home.css';

import i18n from '../i18n.jsx' ; // Import the i18n configuration
import { useTranslation } from 'react-i18next';

function Home() { 

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ "padding":"10px 20px" }}>
      <h3 style={{minHeight: '50px'}}> {t('hello')} </h3>
      <img src={logo_Home_Jason} alt="" className='logo_Home_Jason' />
    </div>
  );
}

export default Home