import React from 'react';
import Library from './Library'
import Preview from './Preview'

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
