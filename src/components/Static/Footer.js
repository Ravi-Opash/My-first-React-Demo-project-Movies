import style from "./Footer.module.css";
import playStore from '../Dynamic/Images/playstore.png'
import appStore from '../Dynamic/Images/appstore.png'

function Footer() {
  return (
    <footer>
      <div className={style.main_footer}>
        <div className={style.footer_top}>
          <ul>
            <li>Home</li>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
            <li>Collection Statement</li>
            <li>Help</li>
            <li id={style.last_list}>Manage Account</li>
          </ul>
          <p>Copyrigtht &#169; 2016 DEMO Streaming.All Right Reserved.</p>
        </div>
        <div className={style.footer_bottom}>
            <div className={style.footer_bottom_left}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Gwa4d4VvrSSMtFeY4vt9MT96XVewRCoAHOvsZfEBrg&s" alt="Image1"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPYB_fBA-kkTtIbL5E_g3kS6iu3Y68y5Hrs-Lgn8Obw&s" alt="Image2"/>
                <img src="https://image.similarpng.com/very-thumbnail/2020/07/Instagram-black-and-white-logo-vector-png-(5).png" alt="Iamge3"/>
            </div>
            <div className={style.footer_bottom_right}>
            <img src={appStore} alt="Image4"/>
            <img src={playStore} alt="Image5"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf40KhcIlMA2r4te_WehTon_KniUfspEc3IA&usqp=CAU" alt="Image6"/>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
