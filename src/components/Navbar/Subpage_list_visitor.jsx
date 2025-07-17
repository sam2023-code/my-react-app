import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Subpage_list_visitor = () => {

    const { t } = useTranslation();
    return (
            <>
                <ul>
                    <li><Link to= "/">{t('Navbar_home')}</Link></li>
                    <li><Link to= "/about">{t('Navbar_about')}</Link></li>
                    <li><Link to= "/vaccine">{t('Navbar_vaccine')}</Link></li>
                    <li><Link to= "/diary">{t('Navbar_diary')}</Link></li>
                </ul>
            </>
    );
};
export default Subpage_list_visitor;