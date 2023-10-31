import Heading from '@components/heading/heading.component';
import './store-card.style.scss';
import '@assets/scss/base/_utilties.scss';
import React from 'react';

type Props = {
  image: string;
  imageDesc: string;
  title: string;
  paragraph: string;
};

const StoryCard = ({ image, imageDesc, title, paragraph }: Props) => {
  return (
    <div className="story">
      <figure className="story__shape">
        <img src={image} alt={imageDesc} className="story__image" />
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
