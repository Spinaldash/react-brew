import React from 'react';
import LibraryCard from './LibraryCard'
import { setLoader } from '../helpers/setLoader'


class Library extends React.Component {
  loadSet(set) {
    setLoader(set)
    .then((data) =>  {
      this.props.addLibrarySource(data)
    })
    .catch((err) => console.error('Error Beep boo: ', err));
  }

  render() {
    let libraryCards = Object.keys(this.props.state.library).map((id) => <LibraryCard {...this.props.state.library[id]} onCardClick={this.props.onCardClick} key={id}></LibraryCard>);

    // TODO: Turn the AddSet Buttons into it's own bar
    return (
      <div className="library-view-item">
        <p>Library</p>
        <span className="set-option" onClick={() => this.loadSet('AKH')}>AKH</span>
        <span className="set-option" onClick={() => this.loadSet('2ED')}>2ED</span>
        <div className='card-dock-container'>
          {libraryCards}
        </div>
      </div>
    )
  }
}

export default Library;
