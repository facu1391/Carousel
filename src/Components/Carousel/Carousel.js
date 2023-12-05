import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import Card from '../Card/Card';

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  const handleNavClick = (direction) => {
    setActive((prevActive) => prevActive + direction);
  };

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => handleNavClick(-1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <Card
          key={i}
          title={'Card ' + (i + 1)}
          content={child.props.content}
          active={i === active}
          offset={(active - i) / 3}
          direction={Math.sign(active - i)}
          absOffset={Math.abs(active - i) / 3}
        />
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => handleNavClick(1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

export default Carousel;