import React from 'react';

import ProjectItem from './ProjectItem';

function Project() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {new Array(10).fill('').map((_, index: number) => (
        <ProjectItem key={index} />
      ))}
    </div>
  );
}

export default Project;
