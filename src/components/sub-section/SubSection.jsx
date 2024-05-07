import React from 'react';
import SERIES from '../data/movies';
import Section from './section/section';

const SubSection = () => {
  return (
    <div>
      {SERIES.map(series => (
        <Section key={series.id} series={series} />
      ))}
    </div>
  );
}

export default SubSection;
