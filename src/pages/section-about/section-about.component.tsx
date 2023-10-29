import Heading from '@components/heading/heading.component';
import '@assets/scss/base/_utilties.scss';
import './section-about.style.scss';
import Grid from '@components/grid/grid.component';

const SectionAbout = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-8">
        <Heading textLevel="sec">Exciting tours for adventurous people</Heading>
      </div>

      <Grid row>
        <Grid colClassName="col-1-of-2">Text content</Grid>
        <Grid colClassName="col-1-of-2">Imge compoisition</Grid>
      </Grid>
    </section>
  );
};

export default SectionAbout;
