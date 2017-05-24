import React from 'react';
import LibraryCard from './LibraryCard'
import { setLoader } from '../helpers/setLoader'


class Library extends React.Component {
  loadSet(set) {
    console.log('running loadSet: ', set)
    setLoader(set)
    .then((data) =>  console.log('setLoader returned: ', data))
    .catch((err) => console.error('Error Beep boo: ', err))
  }

  render() {
    let libraryCards = this.props.state.library.map((currentCard) => <LibraryCard {...currentCard} onCardClick={this.props.onCardClick} key={currentCard.id}></LibraryCard>);
    return (
      <div className="library-view-item">
        <p>Library</p>
        <div className="set-option" onClick={() => this.loadSet('AKH')}>AKH</div>
        <div className='card-dock-container'>
          {libraryCards}
        </div>
      </div>
    )
  }
}

export default Library;
