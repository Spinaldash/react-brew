import React from 'react';

// class LibraryCard extends React.Component {
//   render() {
//     return (
//       <div className='card-item' onClick={() => {onCardClick(cardName)}}>{this.props.text}</div>
//     )
//   }
// }

const LibraryCard = ({cardName, onCardClick}) => (
  <div className='card-item' onClick={() => {onCardClick(cardName)}}>{cardName}</div>
)

export default LibraryCard;
