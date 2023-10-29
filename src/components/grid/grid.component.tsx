import './grid.style.scss';
import React from 'react';

type Props =
  | {
      children: React.ReactNode;
      row: boolean;
      colClassName?: never;
    }
  | {
      children: React.ReactNode;
      row?: never;
      colClassName:
        | 'col-1-of-2'
        | 'col-1-of-3'
        | 'col-2-of-3'
        | 'col-1-of-4'
        | 'col-2-of-4'
        | 'col-3-of-4';
    };

const Grid = ({ children, row = false, colClassName }: Props) => {
  if (row) return <div className="row">{children}</div>;
  return <div className={colClassName}>{children}</div>;
};

export default Grid;
