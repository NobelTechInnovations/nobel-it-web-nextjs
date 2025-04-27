// InfiniteCarousel.js
import React from 'react';
import { Icon } from '@iconify/react';

const InfiniteCarousel = () => {
  const items = [
    { icon: <Icon icon="logos:laravel" width="96" height="96" /> },
    { icon: <Icon icon="vscode-icons:file-type-node" width="96" height="96" /> },
    { icon: <Icon icon="devicon:flutter" width="96" height="96" /> },
    { icon: <Icon icon="vscode-icons:file-type-reactjs" width="96" height="96" /> },
    { icon: <Icon icon="skill-icons:golang" width="96" height="96" /> },
    { icon: <Icon icon="skill-icons:expressjs-dark" width="96" height="96" /> },
    { icon: <Icon icon="devicon:python-wordmark" width="96" height="96" /> },
  ];

  return (
    <div className="carousel-container py-12">
      <div className="carousel-track">
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item.icon}
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`duplicate-${index}`} className="carousel-item">
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;