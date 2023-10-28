import './App.scss';
import LogoWhite from './assets/images/logo-white.png';

function App() {
  return (
    <>
      <header className="header">
        <div className="logo-box">
          <img src={LogoWhite} alt="logo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">is where life happens</span>
          </h1>

          <a href="#" className="btn btn-white">
            Discover our tours
          </a>
        </div>
      </header>
    </>
  );
}

export default App;
