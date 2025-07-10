import '../css/style.css'; // Make sure to import your CSS file

import i18n_lang from '../i18n.jsx' ; // Import the i18n configuration
import { useTranslation } from 'react-i18next';


const Useful_link = () => {


  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
	i18n.changeLanguage(lng);
  };

  return (
    <>
    <br/>
    <h3 style={{ textAlign: 'center' }}> {t('Navbar_useful_link_page_title')}  </h3>
    
	<div className="single_row">
		<a href="https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1">
		AWS Console
		</a>
	</div>
	<br/>

    
	<div className="single_row">
		<a href="https://hub.docker.com/repositories/samchan930423">
		hub docker
		</a>
	</div>
	<br/>


    <div className="single_row">
		<a href="https://github.com/sam2023-code/my-react-app">
		Github
		</a>
	</div>
	<br/>


    Youtube:
    <div className="single_row">
		<a href="https://www.youtube.com/watch?v=l0RlF5ffzU8&t=578s&ab_channel=FelixYu">
		AWS Load Balancers with EC2 Instances
		</a>
	</div>
	<br/>

	<div className="single_row">
		<a href="https://www.youtube.com/watch?v=p6xDCz00TxU&t=428s&ab_channel=TechWorldwithNana">
			EKS tutorial
		</a>
	</div>


    </>
  );
}

export default Useful_link;