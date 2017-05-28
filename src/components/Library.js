import React from 'react';
import LibraryCard from './LibraryCard'
import { setLoader } from '../helpers/setLoader'
import { whatsInStandard } from '../helpers/inStandard'


class Library extends React.Component {
  loadSet(set) {
    setLoader(set)
    .then((data) =>  {
      this.props.addLibrarySource(data)
    })
    .catch((err) => console.error('Error Beep boo: ', err));
  }

  loadStandard() {
    whatsInStandard()
    .then((setsInStandard) => {
      for (const set of setsInStandard) {
        this.loadSet(set)
      }
    })
  }

  render() {
    let libraryCards = Object.keys(this.props.state.library).map((id) => <LibraryCard {...this.props.state.library[id]} onCardClick={this.props.onCardClick} key={id}></LibraryCard>);

    // TODO: Turn the AddSet Buttons into it's own bar
    return (
      <div className="library-view-item">
        <p>Library</p>
        <span className="set-option" onClick={() => this.loadSet('AKH')}>AKH</span>
        <span className="set-option" onClick={() => this.loadStandard()}>Standard</span>
        <div className='card-dock-container'>
          {libraryCards}
        </div>
      </div>
    )
  }
}

export default Library;
