import Heading from '@components/heading/heading.component';
import './store-card.style.scss';
import '@assets/scss/base/_utilties.scss';

type Props = {
  image: string;
  imageDesc: string;
  title: string;
  paragraph: string;
  name: string;
};

const StoryCard = ({ image, imageDesc, title, paragraph, name }: Props) => {
  return (
    <div className="story">
      <figure className="story__shape">
        <img src={image} alt={imageDesc} className="story__image" />
        <figcaption className="story__caption">{name}</figcaption>
      </figure>
      <div className="story__text">
        <Heading textLevel="ter" className="u-margin-bottom-small">
          {title}
        </Heading>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default StoryCard;
