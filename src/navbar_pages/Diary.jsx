import '../css/style.css'; // Make sure to import your CSS file
import '../css/diary.css'; // Make sure to import your CSS file
import Diary_navbar from './Diary_navbar.jsx'

import { useTranslation } from 'react-i18next';
import YouTuberPlayer from '../components/YoutuberPlayer.jsx';
import YouTuberPlayerR from '../components/YoutuberPlayerR.jsx';

import { useParams  } from 'react-router-dom';

import Home from './Home.jsx'

const Diary_1_item_bicycle = () => {
    const videoId = 'RPUi3Wfq_wk';
    return (
            <div className=''>
                  <div className='diary-video'>
                    <h3>第一次踏單車</h3>
                    <YouTuberPlayerR videoId={videoId} />
                  </div>
            </div>
      );

}
const Diary_2_item_juice = () => {
    const videoId = 'qxUkgpA3WO0';
    return (
            <div className=''>
                  <div className='diary-video'>
                    <h3>自己飲果汁</h3>
                    <YouTuberPlayerR videoId={videoId} />
                  </div>
            </div>
      );

}


const Diary = () => {

  const { t, i18n } = useTranslation();
  
  const { id } = useParams(); // Get the ID from the URL

  // You can fetch data based on the ID or use static data
  const itemDetails = {
    1: { name: 'Item 1', details: 'This is the first item.' },
    item_bicycle: { name: 'Item', details: <Diary_1_item_bicycle /> },
    item_juice: { name: 'Item', details: <Diary_2_item_juice /> },
  };

  const item = itemDetails[id];

  

  return (
      <>
      <div className='diary-container'>
          <div className='diary-left' ><Diary_navbar /> </div>

          <div className='diary-right'>
                {item ? item.details : ''}
          </div>
      </div>
      </>
      );
}

export default Diary;