import './card.style.scss';

type Props = {
  classNameForFront?: string;
  classNameForBack?: string;
};

const Card = ({ classNameForFront = '', classNameForBack = '' }: Props) => {
  return (
    <div className="card">
      <div className={`card__side card__side--front ${classNameForFront}`}>
        Front
      </div>
      <div
        className={`card__side card__side--back card__side--back-1 ${classNameForBack}`}
      >
        Back
      </div>
    </div>
  );
};

export default Card;
