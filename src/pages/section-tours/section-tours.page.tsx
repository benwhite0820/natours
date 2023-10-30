import Card from '@components/card/card.component';
import './section-tours.style.scss';
import '@assets/scss/abstracts/_variables.scss';
import Grid from '@components/grid/grid.component';
import Heading from '@components/heading/heading.component';

const SectionTours = () => {
  const dataObject = {
    card1: [
      '3 day tours',
      'Up to 30 people',
      '2 tour guides',
      'Sleep in cozy hotels',
      'Difficulty: ease',
    ],
  };

  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <Heading textLevel="sec">Most popular tours</Heading>
      </div>
      <Grid row>
        <Grid colClassName="col-1-of-3">
          <Card
            backClassName="card__side--back-1"
            imageClassName="card__picture--1"
            cardTitleClassName="card__heading-span--1"
            cardTitle="The Sea Explorer"
            detailsArray={dataObject.card1}
          />
        </Grid>
        <Grid colClassName="col-1-of-3">
          <Card
            backClassName="card__side--back-2"
            cardTitle="The Sea Explorer"
          />
        </Grid>
        <Grid colClassName="col-1-of-3">
          <Card
            backClassName="card__side--back-3"
            cardTitle="The Sea Explorer"
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default SectionTours;
