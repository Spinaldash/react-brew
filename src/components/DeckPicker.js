import React from 'react';
import { Redirect } from 'react-router-dom'
import { getFunName } from '../helpers/helper';

class DeckPicker extends React.Component {
  // This runs when we create a component
  constructor(props) {
    // runs react component stuff
    super(props);
    this.state = {value: null};
    // binding this to our class methods, because constructor has this bound
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    // Setting a state renders a component with new properties....
    this.setState({value: this.deckInput.value});
  }


  render() {
    let redirectJutsu = null;
    if (this.state.value) {
      redirectJutsu = <Redirect to={`/deck/${this.state.value}`}/>;
    } else {
      redirectJutsu = null;
    }
    return (
      <form className="deck-selector" onSubmit={this.handleSubmit}>
        <h3>Please Name your Deck:</h3>
        <input type="text" required placeholder='Deck Name' defaultValue={getFunName()}
          ref={(input) => {this.deckInput = input}}/>
        {redirectJutsu}
        <button type="submit"> Start Brewing</button>
      </form>
    )
  }
}

//Surfacing router for our purposes no longer works
// DeckPicker.contextTypes = {
//   router: React.PropTypes.object
// }

export default DeckPicker;
