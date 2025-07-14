import '../css/style.css'; // Make sure to import your CSS file

import i18n from '../i18n.jsx' ; // Import the i18n configuration
import { useTranslation } from 'react-i18next';
import YouTubePlayer from '../components/YoutuberPlayer.jsx';

//https://heic.online/
const Useful_link = () => {


  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
	i18n.changeLanguage(lng);
  };

  
  return (
    <>
    <br/>
    <h3 style={{ textAlign: 'center' }}> {t('Navbar_useful_link_page_title')}  </h3>
    

	Tools:
	<div className="single_row">
		<a href="https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1" target="_blank">
		AWS Console
		</a>
	</div>
	<br/>

	<div className="single_row">
		<a href="http://localhost:3333" target="_blank">
		Jenkins
		</a>
	</div>
	<br/>

    
	<div className="single_row">
		<a href="https://hub.docker.com/repositories/samchan930423" target="_blank">
		hub docker
		</a>
	</div>
	<br/>


    <div className="single_row">
		<a href="https://github.com/sam2023-code/my-react-app" target="_blank">
		Github
		</a>
	</div>
	<br/>

	<div className="single_row">
		<a href="http://ec2-44-204-173-147.compute-1.amazonaws.com/login_page" target="_blank">
		AWS home page
		</a>
	</div>
	<br/>

	<div className="single_row">
		<a href="https://support.console.aws.amazon.com/support/home#/" target="_blank">
		AWS Support
		</a>
	</div>
	<br/>

	<p> </p>

    Youtube:
    <div className="single_row">
		<a href="https://www.youtube.com/watch?v=l0RlF5ffzU8&t=578s&ab_channel=FelixYu" target="_blank">
		AWS Load Balancers with EC2 Instances
		</a>
	</div>
	<br/>

	<div className="single_row">
		<a href="https://www.youtube.com/watch?v=p6xDCz00TxU&t=428s&ab_channel=TechWorldwithNana" target="_blank">
			EKS tutorial
		</a>
	</div>


    </>
  );
}

export default Useful_link;