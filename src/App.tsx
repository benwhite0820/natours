import SectionFeatures from '@pages/section-features/section-features.page';
import './App.scss';
import Header from './pages/header/header.page';
import SectionAbout from './pages/section-about/section-about.page';
import SectionTours from '@pages/section-tours/section-tours.page';
import SectionStories from '@pages/section-stories/section-stroies.page';
import SectionBook from '@pages/section-book/section-book.component';

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
        <SectionStories />
        <SectionBook />
      </main>
    </>
  );
}

export default App;
