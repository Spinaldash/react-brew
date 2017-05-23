import React from 'react';
import LibraryCard from './LibraryCard'
import { setLoader } from '../helpers/setLoader'


class Library extends React.Component {
  render() {
    let libraryCards = this.props.state.library.map((currentCard) => <LibraryCard {...currentCard} onCardClick={this.props.onCardClick} key={currentCard.id}></LibraryCard>);
    return (
      <div className="library-view-item">
        <p>Library</p>
        <div className="set-option" onClick={() => setLoader('AKH')}>AKH</div>
        <div className='card-dock-container'>
          {libraryCards}
        </div>
      </div>
    )
  }
}

export default Library;
