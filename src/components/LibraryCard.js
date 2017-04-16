import React from 'react';

class LibraryCard extends React.Component {
  render() {
    return (
      <div className='card-item'>{this.props.text}</div>
    )
  }
}

export default LibraryCard;
