import './popup-card.style.scss';
import '@assets/scss/base/_utilties.scss';
import Img1 from '@assets/images/nat-8.jpg';
import Img2 from '@assets/images/nat-9.jpg';
import Button from '@components/button/button.component';
import Heading from '@components/heading/heading.component';

const PopupCard = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={Img1} alt="Tour photo" className="popup__img" />
          <img src={Img2} alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>

          <Heading textLevel="sec" className="u-margin-bottom-small">
            Start booking now
          </Heading>
          <Heading textLevel="ter" className="u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </Heading>

          <p className="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed
            risus pretium quam. Aliquam sem et tortor consequat id. Volutpat
            odio facilisis mauris sit amet massa vitae. Mi bibendum neque
            egestas congue. Placerat orci nulla pellentesque dignissim enim sit.
            Vitae semper quis lectus nulla at volutpat diam ut venenatis.
            Malesuada pellentesque elit eget gravida cum sociis natoque
            penatibus et. Proin fermentum leo vel orci porta non pulvinar neque
            laoreet. Gravida neque convallis a cras semper. Molestie at
            elementum eu facilisis sed odio morbi quis. Faucibus vitae aliquet
            nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet
            sit. Amet massa vitae tortor condimentum lacinia quis vel eros
            donec. Sit amet facilisis magna etiam. Imperdiet sed euismod nisi
            porta.
          </p>
          <Button buttonColor="green">Book now</Button>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
