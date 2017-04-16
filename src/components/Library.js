import React from 'react';
import LibraryCard from './LibraryCard'

class Library extends React.Component {
  render() {
    return (
      <div className="library-view-item">
        <p>Library</p>
        <div className='card-dock-container'>
          <LibraryCard text="1"></LibraryCard>
          <LibraryCard text="2"></LibraryCard>
          <LibraryCard text="3"></LibraryCard>
          <LibraryCard text="4"></LibraryCard>
          <LibraryCard text="5"></LibraryCard>
          <LibraryCard text="6"></LibraryCard>
        </div>
      </div>
    )
  }
}

export default Library;
