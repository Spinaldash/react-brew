import React from 'react';
import LibraryCard from './LibraryCard'

class Library extends React.Component {
  render() {
    let libraryCards = this.props.state.library.map((currentCard) => <LibraryCard {...currentCard} onCardClick={this.props.onCardClick} key={currentCard.id}></LibraryCard>);
    return (
      <div className="library-view-item">
        <p>Library</p>
        <div className='card-dock-container'>
          {libraryCards}
        </div>
      </div>
    )
  }
}

export default Library;
