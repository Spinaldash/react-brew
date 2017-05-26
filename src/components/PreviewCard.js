import React from 'react';

const PreviewCard = ({name, onCardClick, count, multiverseid}) => {
  const minicard = {multiverseid, name}
  return (
  <div onClick={() => {onCardClick(minicard)}} className="card-preview-item">{name}: {count}</div>
)}

export default PreviewCard;
