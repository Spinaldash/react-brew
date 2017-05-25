import React from 'react';

// class PreviewCard extends React.Component {
//   render() {
//     return (
//       <div className="card-preview-item">{this.props.cardName}</div>
//     )
//   }
// }
const PreviewCard = ({name, onCardClick}) => (
  <div onClick={() => {onCardClick(name)}} className="card-preview-item">{name}</div>
)

export default PreviewCard;
