import './form-group.style.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FormGroup = ({ children, className = '' }: Props) => {
  return <div className={`form__group ${className}`}>{children}</div>;
};

export default FormGroup;
