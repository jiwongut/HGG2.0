import './style/style.css';
import userImg from './assets/userImg.png';
import searchIcon from './assets/searchIcon.png';
import bellIcon from './assets/bellIcon.png';
import hggLogo from './assets/hggLogo.png';

function Header() {
  return (
    <div className="header">
      <img className="header--logo" src={hggLogo} alt="흒로고" />
      <div className="header--icons">
        <img className="header--icons-bell" src={bellIcon} alt="알림아이콘" />
        <img className="header--icons-user" src={userImg} alt="유저이미지" />
        <img className="header--icons-search" src={searchIcon} alt="돋보기아이콘" />
      </div>
    </div>
  );
}

export default Header;
