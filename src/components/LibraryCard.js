import React from 'react';

// class LibraryCard extends React.Component {
//   render() {
//     return (
//       <div className='card-item' onClick={() => {onCardClick(cardName)}}>{this.props.text}</div>
//     )
//   }
// }

const LibraryCard = ({text, onCardClick}) => (
  <div className='card-item' onClick={() => {onCardClick(text)}}>{text}</div>
)

export default LibraryCard;
