import Card from '@components/card/card.component';
import './section-tours.style.scss';
import '@assets/scss/abstracts/_variables.scss';
import Grid from '@components/grid/grid.component';
import Heading from '@components/heading/heading.component';
import Button from '@components/button/button.component';

const SectionTours = () => {
  const dataObject = {
    card1: [
      '3 day tours',
      'Up to 30 people',
      '2 tour guides',
      'Sleep in cozy hotels',
      'Difficulty: ease',
    ],
    card2: [
      '7 day tours',
      'Up to 40 people',
      '6 tour guides',
      'Sleep in provided tents',
      'Difficulty: medium',
    ],
    card3: [
      '5 day tours',
      'Up to 15 people',
      '3 tour guides',
      'Sleep in provided tents',
      'Difficulty: hard',
    ],
  };

  return (
    <section className="section-tours" id="section-tours">
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
            value={297}
          />
        </Grid>
        <Grid colClassName="col-1-of-3">
          <Card
            backClassName="card__side--back-2"
            imageClassName="card__picture--2"
            cardTitleClassName="card__heading-span--2"
            cardTitle="The Forest Hiker"
            detailsArray={dataObject.card2}
            value={497}
          />
        </Grid>
        <Grid colClassName="col-1-of-3">
          <Card
            backClassName="card__side--back-3"
            imageClassName="card__picture--3"
            cardTitleClassName="card__heading-span--3"
            cardTitle="The Snow Adventurer"
            detailsArray={dataObject.card3}
            value={897}
          />
        </Grid>
      </Grid>
      <div className="u-center-text u-margin-top-huge">
        <Button buttonColor="green">Discover all tours</Button>
      </div>
    </section>
  );
};

export default SectionTours;
