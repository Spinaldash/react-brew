import React from 'react';

class DeckPicker extends React.Component {
  render() {
    return (
      <form className="deck-selector">
        <h3>Please Name your Deck:</h3>
        <input type="text" required placeholder='Deck Name'/>
        <button type="submit"> Start Brewing</button>
      </form>
    )

  }
}

export default DeckPicker;
