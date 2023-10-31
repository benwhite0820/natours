import Heading from '@components/heading/heading.component';
import './section-book.style.scss';
import '@assets/scss/base/_utilties.scss';
import Grid from '@components/grid/grid.component';
import InputLabel from '@components/input-label/input-label.component';

const SectionBook = () => {
  return (
    <section className="section-book">
      <Grid row>
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <Heading textLevel="sec">Seart booking now</Heading>
              </div>
              <InputLabel
                placeholder="Full Name"
                id="name"
                required
                label="Full Name"
              />
              <InputLabel
                placeholder="Email address"
                id="email"
                required
                label="Email address"
              />
            </form>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default SectionBook;
