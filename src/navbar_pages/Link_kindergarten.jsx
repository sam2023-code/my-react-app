import '../css/style.css'; // Make sure to import your CSS file

import { useTranslation } from 'react-i18next';

const Link_kindergarten = () => {


  const { t, i18n } = useTranslation();

  return (
    <div style={{ "padding":"10px 20px" }} >
    <br/>
    <h3 style={{ textAlign: 'center' }}>   </h3>
    

    Link:
    <div className="single_row">
        <a href="https://www.spacious.hk/zh-tw/blog/35%e6%a0%a1%e7%b6%b2-%e5%b0%8f%e5%ad%b8%e6%8e%92%e5%90%8d-%e9%81%b8%e6%a0%a1%e7%ad%96%e7%95%a5-%e5%b1%8b%e8%8b%91%e4%b8%80%e8%a6%bd/" target="_blank">
            35校網
        </a>
    </div>
    <br/>

    <div className="single_row">
        <a href="https://www.ohpama.com/472310/%E6%9C%AC%E5%9C%B0%E5%8D%87%E5%AD%B8/%E5%B9%BC%E7%A8%9A%E5%9C%92/n%e7%8f%ad%e5%ad%b8%e8%b2%bb-%e4%b9%9d%e9%be%8d%e5%8d%80_%e5%b9%bc%e7%a8%9a%e5%9c%92n%e7%8f%ad%e5%ad%b8%e8%b2%bb/page2" target="_blank">
            N班學費 
        </a>
    </div>
    <br/>

    <div className="single_row">
        <a href="https://www.hkp.com.hk/zh-hk/property-news/uncategorized/%E3%80%90%E9%BE%8D%E5%B9%BC2023%E3%80%91%E9%A6%99%E6%B8%AF%E6%9C%89%E9%82%8A%E9%96%93%E4%B8%80%E6%A2%9D%E9%BE%8D%E5%B9%BC%E7%A8%9A%E5%9C%92%E3%80%81%E5%B0%8F%E5%AD%B8%E3%80%81%E4%B8%AD%E5%AD%B8/" target="_blank">
            Top100幼稚園排名 
        </a>
    </div>
    <br/>

    


    {
    sessionStorage.getItem('login_type') === "aaaa" ?
        <>

                <div className="single_row">
                    <a href="" target="_blank">
                        N班學費 
                    </a>
                </div>
        </>
    :
        <p></p>
    }



    </div>
  );
}

export default Link_kindergarten;