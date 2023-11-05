import './composition.style.scss';
import Img1Large from '@assets/images/nat-1-large.jpg';
import Img1Small from '@assets/images/nat-1.jpg';
import Img2Large from '@assets/images/nat-2-large.jpg';
import Img2Small from '@assets/images/nat-2.jpg';
import Img3Large from '@assets/images/nat-3-large.jpg';
import Img3Small from '@assets/images/nat-3.jpg';

const ResponsiveImage = ({
  largeImage,
  smallImage,
  alt,
  currentImage,
}: {
  largeImage: string;
  smallImage: string;
  alt: string;
  currentImage: '1' | '2' | '3';
}) => (
  <img
    srcSet={`${smallImage} 300w, ${largeImage} 1000w`}
    sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
    alt={alt}
    className={`composition__photo composition__photo--p${currentImage}`}
  />
);

const Composition = () => {
  return (
    <div className="composition">
      <ResponsiveImage
        largeImage={Img1Large}
        smallImage={Img1Small}
        alt="Photo1"
        currentImage="1"
      />
      <ResponsiveImage
        largeImage={Img2Large}
        smallImage={Img2Small}
        alt="Photo2"
        currentImage="2"
      />
      <ResponsiveImage
        largeImage={Img3Large}
        smallImage={Img3Small}
        alt="Photo3"
        currentImage="3"
      />
    </div>
  );
};

export default Composition;
