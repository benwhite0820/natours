import SectionFeatures from '@pages/section-features/section-features.page';
import './App.scss';
import Header from './pages/header/header.page';
import SectionAbout from './pages/section-about/section-about.page';
import SectionTours from '@pages/section-tours/section-tours.page';

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
      </main>
    </>
  );
}

export default App;
