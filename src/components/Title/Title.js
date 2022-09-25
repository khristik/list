import React from 'react';
import './title.css';

const Title = ({title, count}) => {
  return (
      <div className={'title'}>
          <h1>{title}</h1>
          <p>
              Count: <span>{count}</span>
          </p>
      </div>
  );
};

export default Title;
