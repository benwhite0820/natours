import './heading.style.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  textLevel: 'main' | 'sub' | 'sec' | 'ter';
  className?: string;
};

const Heading = ({ children, textLevel, className = '' }: Props) => {
  const headingStyle = {
    main: 'heading-primary--main',
    sub: 'heading-primary--sub',
  };

  if (textLevel === 'sec')
    return <h2 className={`heading-secondary ${className}`}>{children}</h2>;

  if (textLevel === 'ter')
    return <h3 className={`heading-tertiary ${className}`}>{children}</h3>;

  return (
    <span className={`${headingStyle[textLevel]} ${className}`}>
      {children}
    </span>
  );
};

export default Heading;
