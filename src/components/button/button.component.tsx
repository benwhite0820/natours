import './button.style.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  buttonColor: 'white' | 'green';
};

const Button = ({ children, className = '', buttonColor }: Props) => {
  const buttonColorClassName = {
    white: 'btn--white',
    green: 'btn--green',
  };

  return (
    <a
      href="#"
      className={`btn ${buttonColorClassName[buttonColor]} ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
