import React from 'react';
import PreviewCard from './PreviewCard';
import PropTypes from 'prop-types';

class Preview extends React.Component {
  props = this.props;
  render() {
    // TODO: We should only be providing this element with the exact state it uses aka the deck, not the entire state obj.
    // let previewCards = this.props.state.deck.map((currentCard) => <PreviewCard {...currentCard} onCardClick={this.props.onCardClick} key={currentCard.id}></PreviewCard>);
    return (
      <div className="preview-view-item">
        <p>Deck Preview</p>
        <div className="card-preview-container">
          <PreviewCard cardName="1" onCardClick={this.props.onCardClick}></PreviewCard>
          <PreviewCard cardName="2" onCardClick={this.props.onCardClick}></PreviewCard>
          <PreviewCard cardName="3" onCardClick={this.props.onCardClick}></PreviewCard>
          <PreviewCard cardName="4" onCardClick={this.props.onCardClick}></PreviewCard>
          { /* previewCards */}
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
