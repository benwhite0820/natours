import './input-label.style.scss';

type Props = {
  type?: string;
  className?: string;
  placeholder?: string;
  id?: string;
  required?: boolean;
  label: string;
};

const InputLabel = ({
  type = 'text',
  className,
  placeholder,
  id,
  required = false,
  label,
}: Props) => {
  return (
    <div className={`form__group ${className}`}>
      <input
        type={type}
        className="form__input"
        placeholder={placeholder}
        id={id}
        required={required}
      />
      <label htmlFor={id} className="form__label">
        {label}
      </label>
    </div>
  );
};

export default InputLabel;
