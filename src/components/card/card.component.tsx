import './card.style.scss';

type Props = {
  backClassName?: string;
  imageClassName?: string;
  cardTitleClassName?: string;
  cardTitle?: string;
  detailsArray?: string[];
};

const Card = ({
  backClassName = '',
  imageClassName = '',
  cardTitleClassName = '',
  cardTitle,
  detailsArray,
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

      <div className={`card__side card__side--back ${backClassName}`}>Back</div>
    </div>
  );
};

export default Card;
