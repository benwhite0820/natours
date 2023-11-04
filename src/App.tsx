import SectionFeatures from '@pages/section-features/section-features.page';
import './App.scss';
import Header from './pages/header/header.page';
import SectionAbout from './pages/section-about/section-about.page';
import SectionTours from '@pages/section-tours/section-tours.page';
import SectionStories from '@pages/section-stories/section-stroies.page';
import SectionBook from '@pages/section-book/section-book.component';
import Footer from '@pages/footer/footer.page';
import Navigation from '@components/navigation/navigation.component';
import PopupCard from '@components/popup-card/popup-card.component';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
        <SectionStories />
        <SectionBook />
      </main>
      <Footer />
      <PopupCard />
    </>
  );
}

export default App;
