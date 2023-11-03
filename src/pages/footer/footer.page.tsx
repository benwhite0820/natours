import FooterLogo from '@assets/images/logo-green-2x.png';
import Grid from '@components/grid/grid.component';
import './footer.style.scss';
import Link from '@components/link/link.component';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={FooterLogo} alt="Full logo" className="footer__logo" />
      </div>
      <Grid row>
        <Grid colClassName="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <Link footerLink>Company</Link>
              </li>
              <li className="footer__item">
                <Link footerLink>Contact us</Link>
              </li>
              <li className="footer__item">
                <Link footerLink>Carrers</Link>
              </li>
              <li className="footer__item">
                <Link footerLink>Privacy policy</Link>
              </li>
              <li className="footer__item">
                <Link footerLink>Terms</Link>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid colClassName="col-1-of-2">
          <p className="footer__copyright">
            Built by Jonas Schmedtmann for his online course Advanced CSS and
            Sass . Copyright &copy; by Jonas Schmedtmann. You are 100% allowed
            to use this webpage for both personal and commercial use, but NOT to
            claim it as your own design. A credit to the original author, Jonas
            Schmedtmann, is of course highly appreciated!
          </p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
