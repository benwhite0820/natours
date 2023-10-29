import './button.style.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className = '' }: Props) => {
  return (
    <a href="#" className={`btn btn--white btn--animated ${className}`}>
      {children}
    </a>
  );
};

export default Button;
