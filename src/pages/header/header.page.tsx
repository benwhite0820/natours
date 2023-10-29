import './header.style.scss';
import Heading from '@components/heading/heading.component';
import LogoWhite from '@/assets/images/logo-white.png';
import Button from '@components/button/button.component';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img src={LogoWhite} alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <Heading textLevel="main">Outdoors</Heading>
            <Heading textLevel="sub">is where life happens</Heading>
          </h1>
          <Button>Discover our tours</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
