import React from 'react';
import PreviewCard from './PreviewCard';
import PropTypes from 'prop-types';

class Preview extends React.Component {
  exportDeck() {
    const deck = this.props.deck;
    for (const card in deck) {
      console.log(`${deck[card].count} ${deck[card].name}`);
    }
  }

  render() {
    const currentDeck = this.props.deck
    const previewCards = Object.keys(currentDeck).map((multiverseid) => <PreviewCard {...currentDeck[multiverseid]} onCardClick={this.props.onCardClick} key={multiverseid}></PreviewCard>);

    return (
      <div className="preview-view-item">
        <p>Deck Preview</p>
        <span onClick={() => this.exportDeck()}>Export</span>
        <div className="card-preview-container">
          { previewCards }
        </div>
      </div>
    )
  }
}

Preview.propTypes = {
  cards: PropTypes.object,
  onCardClick: PropTypes.func.isRequired
}

export default Preview;
