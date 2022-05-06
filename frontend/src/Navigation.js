import './style/style.css';
import homeIcon from './assets/homeIcon.svg';
import goodsBulletineIcon from './assets/goodsBulletineIcon.svg';
import goodsPlusIcon from './assets/goodsPlusIcon.svg';
import reviewBulletineIcon from './assets/reviewBulletineIcon.svg';
import faqIcon from './assets/faqIcon.svg';

function Navigation() {
  return (
    <div className="navbar">
      <div className="navbar__icons">
        <img className="navbar__icons-home" src={homeIcon} alt="홈" />
        <img className="navbar__icons-goods" src={goodsBulletineIcon} alt="상품게시판" />
        <img className="navbar__icons-register" src={goodsPlusIcon} alt="게시글등록" />
        <img className="navbar__icons-review" src={reviewBulletineIcon} alt="후기게시판" />
        <img className="navbar__icons-faq" src={faqIcon} alt="FAQ" />
      </div>
    </div>
  );
}

export default Navigation;
