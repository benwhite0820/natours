import '@assets/scss/abstracts/_variables.scss';
import './section-stories.style.scss';
import image1 from '@assets/images/nat-8.jpg';
import Grid from '@components/grid/grid.component';
import Heading from '@components/heading/heading.component';
import StoryCard from '@components/story-card/store-card.component';

const SectionStories = () => {
  const paragraph1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
  labore? Sint officia quos nisi reprehenderit, Lorem ipsum dolor sit
  amet consectetur adipisicing elit. Voluptatem, labore? Sint officia
  quos nisi reprehenderit`;

  const card1 = [
    {
      image: image1,
      imageDesc: 'Person on a tour',
      title: 'I had the best week ever with my family',
      paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
    labore? Sint officia quos nisi reprehenderit, Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Voluptatem, labore? Sint officia
    quos nisi reprehenderit`,
    },
  ];

  return (
    <section className="section-stories">
      <div className="u-center-text u-margin-bottom-big">
        <Heading textLevel="sec">We make people genuinely happy</Heading>
      </div>

      <Grid row>
        <StoryCard
          image={image1}
          imageDesc="Person on a tour"
          title="I had the best week ever with my family"
          paragraph={paragraph1}
        />
      </Grid>
    </section>
  );
};

export default SectionStories;
