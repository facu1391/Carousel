import React from 'react';

const MAX_VISIBILITY = 3;
const Card = ({ title, content, active, offset, absOffset, direction }) => (
    
  <div
    className="card-container"
    style={{
      '--active': active ? 1 : 0,
      '--offset': offset,
      '--direction': direction,
      '--abs-offset': absOffset,
      'pointer-events': active ? 'auto' : 'none',
      'opacity': Math.abs(offset) >= MAX_VISIBILITY ? '0' : '1',
      'display': Math.abs(offset) > MAX_VISIBILITY ? 'none' : 'block',
    }}
  >
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </div>
);

export default Card;