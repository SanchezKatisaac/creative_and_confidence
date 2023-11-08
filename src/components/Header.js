import logo from '../img/logo.svg';
import '../style/base/header.css';


function Header() {
  return (
    <header>
      <img src={logo} className="header__logo" alt="react-logo" />
      <ul className='header__links'>
        <li className='header__links-option'>Portfolio</li>
        <li className='header__links-option'>About</li>
        <li className='header__links-option'>Contact</li>
      </ul>
    </header>
  );
}

export default Header;