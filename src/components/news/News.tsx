import React from 'react';

import NewsItem from './NewsItem';

function News() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {new Array(10).fill('').map((_, index: number) => (
        <NewsItem key={index} />
      ))}
    </div>
  );
}

export default News;
