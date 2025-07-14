import '../css/style.css'; // Make sure to import your CSS file
import '../css/diary.css'; // Make sure to import your CSS file


import { useTranslation } from 'react-i18next';
import YouTubePlayer from '../components/YoutuberPlayer.jsx';


const Diary = () => {


  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
	i18n.changeLanguage(lng);
  };

  const videoId = 'RPUi3Wfq_wk';

  return (

    <div className='diary-video'>
      <h1></h1>
      <YouTubePlayer videoId={videoId} />
    </div>

      );
}

export default Diary;