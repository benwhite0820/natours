import '@assets/scss/abstracts/_variables.scss';
import './section-stories.style.scss';
import image1 from '@assets/images/nat-8.jpg';
import image2 from '@assets/images/nat-9.jpg';
import Grid from '@components/grid/grid.component';
import Heading from '@components/heading/heading.component';
import StoryCard from '@components/story-card/store-card.component';
import Link from '@components/link/link.component';
import BackgroundVideo from '@components/background-video/background-video.component';

const SectionStories = () => {
  const card = [
    {
      image: image1,
      imageDesc: 'Person on a tour',
      title: 'I had the best week ever with my family',
      paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
    labore? Sint officia quos nisi reprehenderit, Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Voluptatem, labore? Sint officia
    quos nisi reprehenderit`,
      name: 'Mary Smith',
    },
    {
      image: image2,
      imageDesc: 'Person on a tour',
      title: 'WOW! My life is completely different now',
      paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
    labore? Sint officia quos nisi reprehenderit, Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Voluptatem, labore? Sint officia
    quos nisi reprehenderit`,
      name: 'Jack Wilson',
    },
  ];

  return (
    <section className="section-stories">
      <BackgroundVideo />
      <div className="u-center-text u-margin-bottom-big">
        <Heading textLevel="sec">We make people genuinely happy</Heading>
      </div>

      {card.map(({ image, imageDesc, title, paragraph, name }) => (
        <Grid row key={title}>
          <StoryCard
            key={name}
            image={image}
            imageDesc={imageDesc}
            title={title}
            paragraph={paragraph}
            name={name}
          />
        </Grid>
      ))}

      <div className="u-center-text u-margin-bottom-huge">
        <Link>Discover all tours →</Link>
      </div>
    </section>
  );
};

export default SectionStories;
