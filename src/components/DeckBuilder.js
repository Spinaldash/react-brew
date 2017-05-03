import React from 'react';
import Library from './Library'
import PreviewContainer from '../containers/PreviewContainer'

// We need to add in Match recieving so we can get a deckId
class DeckBuilder extends React.Component {
  render() {
    return (
      <div>
        <div className="deck-builder">
          <Library />
          <PreviewContainer />
        </div>
      </div>
    )
  }
}

export default DeckBuilder;
