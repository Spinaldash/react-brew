import React from 'react';

const PreviewCard = ({name, onCardClick, count}) => (
  <div onClick={() => {onCardClick(name)}} className="card-preview-item">{name}: {count}</div>
)

export default PreviewCard;
