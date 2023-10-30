import Card from '@components/card/card.component';
import './section-tours.style.scss';
import '@assets/scss/abstracts/_variables.scss';
import Grid from '@components/grid/grid.component';
import Heading from '@components/heading/heading.component';

const SectionTours = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <Heading textLevel="sec">Most popular tours</Heading>
      </div>
      <Grid row>
        <Grid colClassName="col-1-of-3">
          <Card classNameForBack="card__side--front-1" />
        </Grid>
      </Grid>
    </section>
  );
};

export default SectionTours;
