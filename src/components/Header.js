import logo from '../img/logo.svg';


function Header() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;