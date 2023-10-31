import Button from '@components/button/button.component';
import './card.style.scss';

type Props = {
  backClassName?: string;
  imageClassName?: string;
  cardTitleClassName?: string;
  cardTitle?: string;
  detailsArray?: string[];
  value?: number;
};

const Card = ({
  backClassName = '',
  imageClassName = '',
  cardTitleClassName = '',
  cardTitle,
  detailsArray,
  value,
}: Props) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        {/* card__picture 給blend-mode */}
        {/* imageClassName 給沒有透明度的背景圖片加 linear-gradient */}
        <div className={`card__picture ${imageClassName}`} />

        <h4 className="card__heading">
          <span className={`card__heading-span ${cardTitleClassName}`}>
            {cardTitle}
          </span>
        </h4>

        <div className="card__details">
          <ul>
            {detailsArray?.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`card__side card__side--back ${backClassName}`}>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">${value}</p>
          </div>
          <Button buttonColor="white">Book now!</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
