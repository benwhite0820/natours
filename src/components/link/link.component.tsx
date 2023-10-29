import './link.style.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Link = ({ children, className = '' }: Props) => {
  return (
    <a href="#" className={`link-text ${className}`}>
      {children}
    </a>
  );
};

export default Link;
