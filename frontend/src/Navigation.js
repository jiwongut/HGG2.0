import './style/style.css';
import home from './assets/homeIcon.png';
import goodsBulletine from './assets/shoppingBag.png';
import goodsPlus from './assets/goodsPlus.png';
import reviewBulletine from './assets/pencilIcon.png';
import faq from './assets/offerIcon.png';

function Navigation() {
  return (
    <div className="navbar">
      <div className="navbar--icons">
        <img className="navbar--icons-home" src={home} alt="홈" />
        <img className="navbar--icons-goods" src={goodsBulletine} alt="상품게시판" />
        <img className="navbar--icons-register" src={goodsPlus} alt="게시글등록" />
        <img className="navbar--icons-review" src={reviewBulletine} alt="후기게시판" />
        <img className="navbar--icons-faq" src={faq} alt="FAQ" />
      </div>
    </div>
  );
}

export default Navigation;
