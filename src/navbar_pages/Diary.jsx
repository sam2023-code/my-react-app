import '../css/style.css'; // Make sure to import your CSS file
import '../css/diary.css'; // Make sure to import your CSS file


import { useTranslation } from 'react-i18next';
import YouTuberPlayer from '../components/YoutuberPlayer.jsx';
import YouTuberPlayerR from '../components/YoutuberPlayerR.jsx';

const Diary = () => {


  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
	i18n.changeLanguage(lng);
  };

  const videoId = 'RPUi3Wfq_wk';

  return (

    <div className='diary-video'>
      <h1></h1>
      <YouTuberPlayerR videoId={videoId} />
    </div>

      );
}

export default Diary;