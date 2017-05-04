import React from 'react';
import LibraryContainer from '../containers/LibraryContainer'
import PreviewContainer from '../containers/PreviewContainer'

// We need to add in Match recieving so we can get a deckId
class DeckBuilder extends React.Component {
  render() {
    return (
      <div>
        <div className="deck-builder">
          <LibraryContainer />
          <PreviewContainer />
        </div>
      </div>
    )
  }
}

export default DeckBuilder;
