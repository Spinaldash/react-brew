import React from 'react';
import { getFunName } from '../helpers/helper';

class DeckPicker extends React.Component {
  render() {
    return (
      <form className="deck-selector">
        <h3>Please Name your Deck:</h3>
        <input type="text" required placeholder='Deck Name' defaultValue={getFunName()}/>
        <button type="submit"> Start Brewing</button>
      </form>
    )

  }
}

export default DeckPicker;
