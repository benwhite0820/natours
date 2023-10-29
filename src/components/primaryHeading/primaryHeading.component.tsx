import './primaryHeading.style.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  textLevel: 'main' | 'sub';
  className?: string;
};

const PrimaryHeading = ({ children, textLevel, className = '' }: Props) => {
  const headingStyle = {
    main: 'heading-primary--main',
    sub: 'heading-primary--sub',
  };
  return (
    <span className={`${headingStyle[textLevel]} ${className}`}>
      {children}
    </span>
  );
};

export default PrimaryHeading;
