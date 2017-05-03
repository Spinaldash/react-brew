import React from 'react';

// class PreviewCard extends React.Component {
//   render() {
//     return (
//       <div className="card-preview-item">{this.props.cardName}</div>
//     )
//   }
// }
const PreviewCard = ({cardName, onCardClick}) => (
  <div onClick={() => {onCardClick(cardName)}} className="card-preview-item">{cardName}</div>
)

export default PreviewCard;
