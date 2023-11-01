import FormGroup from '@components/form-group/form-group.component';
import './input-label.style.scss';

type Props = {
  type?: string;
  placeholder?: string;
  id?: string;
  required?: boolean;
  label: string;
};

const InputLabel = ({
  type = 'text',
  placeholder,
  id,
  required = false,
  label,
}: Props) => {
  return (
    <FormGroup>
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
    </FormGroup>
  );
};

export default InputLabel;
