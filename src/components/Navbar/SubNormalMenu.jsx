import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Subpage_list_admin from './Subpage_list_admin.jsx'
import Subpage_list_user from './Subpage_list_user.jsx'
import Subpage_list_visitor from './Subpage_list_visitor.jsx'

const SubNormalMenu = () => {

    const { t } = useTranslation();
    

return (
    <>
        {sessionStorage.getItem('isLoggedIn') === 'true' ?

            sessionStorage.getItem('login_username')  === "admin" ?
            <Subpage_list_admin />
            :
                sessionStorage.getItem('login_type')  === "user" ?
                <Subpage_list_user />
                :
                <Subpage_list_visitor/>
            :
            <></>
        }
    
    </>
);
};

export default SubNormalMenu; 