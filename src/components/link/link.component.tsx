import './link.style.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  footerLink?: boolean;
};

const Link = ({ children, className = '', footerLink = false }: Props) => {
  if (footerLink) {
    return (
      <a href="#" className={`footer_link ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <a href="#" className={`link-text ${className}`}>
      {children}
    </a>
  );
};

export default Link;
