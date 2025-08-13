// src/Table.js
import React from 'react';
import '../css/vaccine.css'; // Import CSS for styling
import { useTranslation } from 'react-i18next';


const Output_Table = ({ data }) => {

    const { t, i18n } = useTranslation();

  return (
    <table className="table">
      <thead className='header-height'>
        <tr>
          <th>ID</th>
          <th>{t('Navbar_vaccine_page_date')} </th>
          <th>{t('Navbar_vaccine_page_vaccine')} </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td style={{minWidth: '70px'}}>{item.id_loc}</td>
            <td style={{minWidth: '90px'}}>{item.date}</td>
            <td style={{minWidth: '190px'}}>{item.vaccine}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// src/App.js
//import React from 'react';
//import Table from './Table';

const Vaccine = () => {
    const { t, i18n } = useTranslation();

    const data = [
        { id: 1,id_loc: '1. UH', vaccine: '乙型肝炎疫苗 第一劑', date: '2024-04-23' },
        { id: 1001,id_loc: '', vaccine: '', date: '' },
        { id: 2,id_loc: '2. UH', vaccine: '卡介苗', date: '2024-04-24' },
        { id: 1002,id_loc: '', vaccine: '', date: '' },
        { id: 3,id_loc: '3. FHS', vaccine: '乙型肝炎疫苗 第二劑', date: '2024-05-23' },
        { id: 1003,id_loc: '', vaccine: '', date: '' },
        { id: 4,id_loc: '4. FHS', vaccine: 'DTaP-IPV 疫苗 第一劑', date: '2024-06-25' },
        { id: 5,id_loc: '', vaccine: '肺炎球菌疫苗 第一劑', date: '2024-06-25' },
        { id: 1004,id_loc: '', vaccine: '', date: '' },
        { id: 6,id_loc: '5. TST', vaccine: 'ACT-HIB 第一劑', date: '2024-07-09' },
        { id: 7,id_loc: '', vaccine: 'ROTATEQ 第一劑', date: '2024-07-09' },
        { id: 1005,id_loc: '', vaccine: '', date: '' },
        { id: 8,id_loc: '6. FHS', vaccine: 'DTaP-IPV 疫苗 第二劑', date: '2024-08-27' },
        { id: 9,id_loc: '', vaccine: '肺炎球菌疫苗 第二劑', date: '2024-08-27' },
        { id: 1006,id_loc: '', vaccine: '', date: '' },
        { id: 10,id_loc: '7. TST', vaccine: 'ACT-HIB 第二劑', date: '2024-09-01' },
        { id: 11,id_loc: '', vaccine: 'ROTATEQ 第二劑', date: '2024-09-01' },
        { id: 1007,id_loc: '', vaccine: '', date: '' },
        { id: 12,id_loc: '8. FHS', vaccine: 'DTaP-IPV 疫苗 第三劑', date: '2024-10-23' },
        { id: 13,id_loc: '', vaccine: '乙型肝炎疫苗 第三劑', date: '2024-10-23' },
        { id: 1008,id_loc: '', vaccine: '', date: '' },
        { id: 14,id_loc: '9. TST', vaccine: 'ACT-HIB 第三劑', date: '2024-11-18' },
        { id: 15,id_loc: '', vaccine: 'ROTATEQ 第三劑', date: '2024-11-18' },
        { id: 1009,id_loc: '', vaccine: '', date: '' },
        { id: 16,id_loc: '10. FHS', vaccine: '肺炎球菌疫苗 加強劑', date: '2025-04-24' },
        { id: 17,id_loc: '', vaccine: '麻疹、流行性腮腺炎及德國麻疹混合疫苗 第一劑', date: '2025-04-24' },
        { id: 18,id_loc: '', vaccine: '水痘疫苗 第一劑', date: '2025-04-24' },
        { id: 1010,id_loc: '', vaccine: '', date: '' },
        { id: 19,id_loc: '11. TST', vaccine: '---  3:00 PM  ---', date: '2025-10-22' },
        { id: 1011,id_loc: '', vaccine: '', date: '' },
        { id: 20,id_loc: '12. FHS', vaccine: '---  2:15 PM  ---', date: '2025-10-28' },
    ];

  return (
    <>
    
    <div className="table-container"
      style={{"display": "flex", "flexDirection": "column" , "padding":"10px 20px","maxWidth":"800px" }}
    >
      <h3 style={{minHeight: '50px'}}> {t('Navbar_vaccine_page_title')} </h3>

      <Output_Table data={data} />
      
    </div>
    </>
  );
};

export default Vaccine;
