import './radio-button.style.scss';

type Props = {
  htmlForAndId: string;
  name: string;
  label: string;
};

const RadioButton = ({ htmlForAndId, name, label }: Props) => {
  return (
    <div className="form__radio-group">
      <input
        type="radio"
        className="form__radio-input"
        id={htmlForAndId}
        name={name}
      />
      <label htmlFor={htmlForAndId} className="form__radio-label">
        <span className="form__radio-button"></span>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
