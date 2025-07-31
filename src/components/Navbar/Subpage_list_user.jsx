import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Subpage_list_user = () => {

    const { t } = useTranslation();
    return (
            <>
                <ul>
                    <li><Link to= "/">{t('Navbar_home')}</Link></li>
                    <li><Link to= "/about">{t('Navbar_about')}</Link></li>
                    <li><Link to= "/vaccine">{t('Navbar_vaccine')}</Link></li>
                    <li><Link to= "/diary">{t('Navbar_diary')}</Link></li>
                    <li><Link to= "/messageboard">{t('Navbar_messageboard')}</Link></li>
                    <li><Link to= "/link_kindergarten">{t('Navbar_link_kindergarten')}</Link></li>
                    
                    <li><Link to= "/useful_link">{t('Navbar_link')}</Link></li>
                    
                </ul>
            </>
    );
};
export default Subpage_list_user;