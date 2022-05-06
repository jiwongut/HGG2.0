import './style/style.css';
import userIcon from './assets/userIcon.svg';
import searchIcon from './assets/searchIcon.svg';
import bellIcon from './assets/bellIcon.svg';
import hggLogo from './assets/hggLogo.png';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={hggLogo} alt="흒로고" />
      <div className="header__icons">
        <img className="header__icons-bell" src={bellIcon} alt="알림아이콘" />
        <img className="header__icons-user" src={userIcon} alt="유저이미지" />
        <img className="header__icons-search" src={searchIcon} alt="돋보기아이콘" />
      </div>
    </div>
  );
}

export default Header;
