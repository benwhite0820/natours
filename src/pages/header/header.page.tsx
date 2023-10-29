import './header.style.scss';
import LogoWhite from '../../assets/images/logo-white.png';
import Button from '../../components/button/button.component';
import PrimaryHeading from '../../components/primaryHeading/primaryHeading.component';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img src={LogoWhite} alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <PrimaryHeading textLevel="main">Outdoors</PrimaryHeading>
            <PrimaryHeading textLevel="sub">
              is where life happens
            </PrimaryHeading>
          </h1>
          <Button>Discover our tours</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
