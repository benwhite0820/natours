import Heading from '@components/heading/heading.component';
import '@assets/scss/base/_utilties.scss';
import './section-about.style.scss';
import Grid from '@components/grid/grid.component';
import Link from '@components/link/link.component';

const SectionAbout = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <Heading textLevel="sec">Exciting tours for adventurous people</Heading>
      </div>

      <Grid row>
        <Grid colClassName="col-1-of-2">
          <Heading textLevel="ter" className="u-margin-bottom-small">
            You're going to fall in love with nature
          </Heading>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            labore? Sint officia quos nisi reprehenderit,
          </p>
          <Heading textLevel="ter" className="u-margin-bottom-small">
            Live adventures like you never have before
          </Heading>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            labore? Sint officia quos nisi reprehenderit,
          </p>

          <Link>Learn More &rarr;</Link>
        </Grid>
        <Grid colClassName="col-1-of-2">Imge compoisition</Grid>
      </Grid>
    </section>
  );
};

export default SectionAbout;
