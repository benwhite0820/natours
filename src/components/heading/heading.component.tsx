import './heading.style.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  textLevel: 'main' | 'sub' | 'sec';
  className?: string;
};

const Heading = ({ children, textLevel, className = '' }: Props) => {
  const headingStyle = {
    main: 'heading-primary--main',
    sub: 'heading-primary--sub',
    sec: 'heading-secondary',
  };
  return (
    <span className={`${headingStyle[textLevel]} ${className}`}>
      {children}
    </span>
  );
};

export default Heading;
