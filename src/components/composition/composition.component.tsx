import './composition.style.scss';
import Image1 from '@assets/images/nat-1-large.jpg';
import Image2 from '@assets/images/nat-2.jpg';
import Image3 from '@assets/images/nat-3.jpg';

const Composition = () => {
  return (
    <div className="composition">
      <img
        src={Image1}
        alt="Photo1"
        className="composition__photo composition__photo--p1"
      />
      <img
        src={Image2}
        alt="Photo2"
        className="composition__photo composition__photo--p2"
      />
      <img
        src={Image3}
        alt="Photo3"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
};

export default Composition;
