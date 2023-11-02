import Heading from '@components/heading/heading.component';
import './section-book.style.scss';
import '@assets/scss/base/_utilties.scss';
import Grid from '@components/grid/grid.component';
import InputLabel from '@components/input-label/input-label.component';
import FormGroup from '@components/form-group/form-group.component';
import RadioButton from '@components/radio-button/radio-button.component';
import Button from '@components/button/button.component';

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

              <FormGroup className="u-margin-bottom-medium">
                <RadioButton
                  htmlForAndId="small"
                  name="size"
                  label="Small tour group"
                />
                <RadioButton
                  htmlForAndId="large"
                  name="size"
                  label="Large tour group"
                />
              </FormGroup>

              <FormGroup>
                <Button buttonColor="green">Next step &rarr;</Button>
              </FormGroup>
            </form>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default SectionBook;
