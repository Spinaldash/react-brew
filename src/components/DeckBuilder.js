import React from 'react';
import Library from './Library'
import Preview from './Preview'

// We need to add in Match recieving so we can get a deckId
class DeckBuilder extends React.Component {
  render() {
    return (
      <div>
        <div className="deck-builder">
          <Library />
          <Preview />
          </div>
      </div>
    )
  }
}

export default DeckBuilder;
