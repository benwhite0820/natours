import Heading from '@components/heading/heading.component';
import './section-book.style.scss';
import '@assets/scss/base/_utilties.scss';
import Grid from '@components/grid/grid.component';

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
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default SectionBook;
