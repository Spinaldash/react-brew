import React from 'react';

class Library extends React.Component {
  render() {
    return (
      <div className="library-view-item">
        <p>Library</p>
        <div className='card-dock-container'>
          <div className='card-item'>1</div>
          <div className='card-item'>2</div>
          <div className='card-item'>3</div>
          <div className='card-item'>4</div>
          <div className='card-item'>5</div>
          <div className='card-item'>6</div>
        </div>
      </div>
    )
  }
}

export default Library;
