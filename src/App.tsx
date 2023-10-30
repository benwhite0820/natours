import SectionFeatures from '@pages/section-features/section-features.page';
import './App.scss';
import Header from './pages/header/header.page';
import SectionAbout from './pages/section-about/section-about.page';

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
      </main>
    </>
  );
}

export default App;
